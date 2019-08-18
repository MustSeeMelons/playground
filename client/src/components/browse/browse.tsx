import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Divider, Paper, Grid, MenuList, MenuItem, Box } from "@material-ui/core";
import { connect } from "react-redux"
import { Category } from "../../../../_models/category";
import { addCategoryActionCreator } from "../../actions/categoryActions";
import { State } from "../../store/store";
import { Dispatch } from "redux";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainCategories: {
            width: "100px",
            marginRight: "10px"
        }
    })
);

interface ContentProps {
    images: Category[];
}

const Browse: React.FC<ContentProps> = (props: ContentProps) => {
    const classes = useStyles();

    return (
        <Paper>
            <Grid container direction="row">
                <MenuList className={classes.mainCategories}>
                    {props.images.map((image, index) => {
                        return (
                            <Box key={`category-${index}`}>
                                <MenuItem >
                                    {image.title}
                                </MenuItem>
                                <Divider />
                            </Box>
                        )
                    })}
                </MenuList>
                <Paper>
                    Some content
                </Paper>
            </Grid>
        </Paper>
    );
}

// Which slice of the state we are interested in
const mapStateToProps = (state: State) => {
    return {
        ...state
    }
}

// Which actions we wish to be able to dispatch using props.
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        add: (): void => {
            dispatch(addCategoryActionCreator({ title: "", id: "" }))
        }
    }
}

const ConnectedBrowse = connect(mapStateToProps, mapDispatchToProps)(Browse);

export { ConnectedBrowse as Browse }
