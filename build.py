#!/usr/bin/python

import re


def clean_spaces(s):
    return re.sub('\s+', ' ', s.replace('\t', ''))
    # return re.sub('\s+','', s.replace('var ','var#')).replace('var#','var ')


out = ""
f = open("index.html", "r")

for line in f:
    if "link" in line:
        p = re.compile('href="([^"]+)"', re.IGNORECASE)
        m = p.search(line)
        if m is not None:
            css_fn = m.group(1)
            out += "<style>"
            css = open(m.group(1), "r")
            for l in css:
                out += clean_spaces(l[:-1])
            css.close()
            out += "</style>"
    elif "/SCRIPTS" in line:
        out += "}})()</script>"
    elif "SCRIPTS" in line:
        out += "<script>(function(){var window={};with(window){'use strict';"
    elif "script" in line:
        p = re.compile('src="([^"]+)"', re.IGNORECASE)
        m = p.search(line)
        if m is not None:
            js_fn = m.group(1)
            js = open(m.group(1), "r")
            for l in js:
                l = clean_spaces(l.replace('"use strict"', ''))
                out += l[:l.index('//')] if '//' in l else l[:-1]
            js.close()
    else:
        out += clean_spaces(line[:-1])

f.close()
print(out)
