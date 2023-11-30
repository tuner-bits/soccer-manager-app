export const GLOBAL_TEXT= {
    EDIT: "Edit",
    DELETE: "Delete",
    PLAYER: "Player",
    CANCEL: "Cancel"
}

export const DIALOG = {
    PLAYER_ACTION : {
        HEADING: "Actions",
        EDIT_PLAYER: GLOBAL_TEXT.EDIT + GLOBAL_TEXT.PLAYER,
        DELETE_PLAYER: GLOBAL_TEXT.EDIT + GLOBAL_TEXT.PLAYER,
    },
    CONFIRMING: {
        HEADING: "Are you sure ?",
        BODY: "This action cannot be undone",
    },
    NO_STARTERS: {
        HEADING: "Not enough starters",
        BODY: "Your team doesn’t have enough starters  for one or more of the positions in the 4-3-3 formation",
    },
    TOO_MANY_STARTERS: {
        HEADING: "There are too many starters",
        BODY: "Your team has too many starters for one or more of the positions in the 4-3-3 formation."
    }
}
