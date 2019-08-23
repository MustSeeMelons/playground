import React, { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Divider, Paper, MenuList, MenuItem, Box, Container } from "@material-ui/core";
import { connect } from "react-redux"
import { Category } from "../../../../_models/category";
import { State } from "../../store/store";
import { Dispatch } from "redux";
import { globalApi } from "../../api/api";
import { isCategoriesLoaded } from "../../selectors/categorySelectors";
import { Progress } from "../progress/progress";
import { addRandomPicActionCreator } from "../../actions/globalActions";
import { isImagesLoaded } from "../../selectors/globalSelectors";
import { stateActions } from "../../stateActions/stateActions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootContainer: {
            display: "flex",
            padding: 0
        },
        rootCategoryMenu: {
            width: "100px"
        },
        imageContainer: {
            padding: "15px",
            display: "flex"
        },
        image: {
            width: "100%",
            objectFit: "contain"
        }
    })
);

interface BrowseProps {
    categories: Category[];
    isCategoriesLoaded: boolean;
    isImagesLoaded: boolean;
    images: any[];
    addRandomPic: (image: any) => void;
}

/**
 * 
 */
const LandingPage: React.FC<BrowseProps> = (props: BrowseProps) => {
    const classes = useStyles();

    useEffect(() => {
        const { addRandomPic } = props;

        (async () => {
            await stateActions.loadCategories();

            const image = await globalApi.fetchRandomPics();

            addRandomPic(image);
        })();

        // We are not using any component scope variables here, so this is safe
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Paper id="landingPagePaper">
            <Container id="landingPageContainer" className={classes.rootContainer}>
                <MenuList className={classes.rootCategoryMenu}>
                    {props.isCategoriesLoaded ?
                        props.categories.map((category: Category, index) => {
                            return (
                                <Box key={`category-${index}`}>
                                    <MenuItem >
                                        {category.title}
                                    </MenuItem>
                                    <Divider />
                                </Box>
                            )
                        }) : <Progress />}
                </MenuList>
                <Container className={classes.imageContainer}>
                    {props.isImagesLoaded ? <img className={classes.image} src={props.images[0]} alt="random" /> : <Progress />}
                </Container>
            </Container>
        </Paper>
    );
}

// Which slice of the state we are interested in
const mapStateToProps = (state: State) => {
    return {
        categories: state.categoryReducer.categories,
        images: state.globalReducer.images,
        isCategoriesLoaded: isCategoriesLoaded(state),
        isImagesLoaded: isImagesLoaded(state)
    }
}


// Which actions we wish to be able to dispatch using props.
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addRandomPic: (image: any) => {
            dispatch(addRandomPicActionCreator(image));
        }
    }
}

const ConnectedLandingPage = connect(mapStateToProps, mapDispatchToProps)(LandingPage);

export { ConnectedLandingPage as LandingPage }
