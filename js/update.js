"use strict"

function update () {

    gvalues[config.VAR_ID.COST] = gvalues[config.VAR_ID.PROD] + gvalues[config.VAR_ID.PROMO] + gvalues[config.VAR_ID.PLACE];
    gvalues[config.VAR_ID.FIN_PREV] = gvalues[config.VAR_ID.FIN] - gvalues[config.VAR_ID.COST];
    gvalues[config.VAR_ID.FIN_DETAILS] = gvalues[config.VAR_ID.FIN] + " - " + gvalues[config.VAR_ID.COST];

}
