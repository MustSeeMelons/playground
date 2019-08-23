import React, { useState, useEffect } from "react";
import { State } from "../../store/store";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { FormControl, InputLabel, Select, MenuItem, Paper, TextField, Typography, Button, Container } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Category } from "../../../../_models/category";
import { getChildrenForCateogry } from "../../selectors/categorySelectors";
import _ from "lodash";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            margin: theme.spacing(1),
        },
        formControl: {
            width: 150,
            maxWidth: 150,
            height: 50,
            margin: theme.spacing(1),
            marginTop: 0,
            marginBottom: 0
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        categoryPaper: {
            padding: 15
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            marginTop: theme.spacing(0)
        },
        text: {
            marginLeft: 22
        },
        submitButton: {
            justifySelf: "flex-end",
            alignSelf: "flex-end"
        },
        nameContainer: {
            padding: 0,
            maxWidth: 160
        },
        hierarchyContainer: {
            display: "flex",
            alignContent: "flex-start",
            flexDirection: "column",
            padding: 0
        }
    })
);

interface CategoryAddProps {
    categories: Category[];
}

interface CategoryAddState {
    parentIdSelections: string[];
    categoryName: string;
    parentCategorySelector: Category[][]
}

const CATEGORY_NAME: string = "categoryName";
const PARENT_ID: string = "parentId";

const CategoryAdd: React.FC<CategoryAddProps> = (props: CategoryAddProps) => {

    const [values, setValues] = useState<CategoryAddState>({
        parentIdSelections: [],
        categoryName: "",
        parentCategorySelector: []
    });

    const handleChange = (index?: number) => (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        event.persist();

        // Could optimize, so we are not copying this all the time
        let newSelections = _.cloneDeep(values.parentIdSelections);

        if (index !== undefined) {
            // Saving the current selection while deleting all selections after it
            const newParentId = (event.target.value as string);
            newSelections[index] = newParentId;
            newSelections.splice(index + 1);
            addParentSelector(newParentId, index);
        }

        setValues((oldValues: CategoryAddState) => ({
            ...oldValues,
            parentIdSelections: [...newSelections]
        }));
    }

    const classes = useStyles();

    const addParentSelector = (parentId?: string, index?: number) => {
        const filteredCategories = getChildrenForCateogry(props.categories, parentId);

        if (!_.isEmpty(filteredCategories)) {
            const oldSelectors = values.parentCategorySelector;
            if (index !== undefined) {
                oldSelectors.splice(index + 1);
            }

            setValues((oldValues: CategoryAddState) => ({
                ...oldValues,
                parentCategorySelector: [...oldSelectors, filteredCategories]
            }));
        }
    }

    const handleSave = () => {
        // TODO disable controls globally
        // TODO enbable them if all is well
        // TODO show err if shit hits the fan/partially enabled controls
        console.log("save");
    }

    useEffect(() => {
        addParentSelector();
        // We are not using any component scope variables here, so this is safe
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Paper id="categoryAddPaper" className={classes.categoryPaper}>
            <Typography variant="h5" className={classes.text}>
                New category addition
            </Typography>
            <Typography variant="caption" className={classes.text}>
                Enter the category name and optionally select a parent category.
            </Typography>
            <form className={classes.form}>
                <Container id="nameContainer" className={classes.nameContainer}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id={CATEGORY_NAME}
                            name={CATEGORY_NAME}
                            label="Category Name"
                            className={classes.textField}
                            value={values.categoryName}
                            onChange={handleChange()}
                            margin="normal"
                        />
                    </FormControl>
                </Container>
                <Container className={classes.hierarchyContainer}>
                    {values.parentCategorySelector.map((categoryList: Category[], index: number) => {
                        return (
                            <FormControl className={classes.formControl} key={`selector-${index}`}>
                                <InputLabel htmlFor={PARENT_ID}>Parent Hierarchy</InputLabel>
                                <Select
                                    className={classes.selectEmpty}
                                    value={values.parentIdSelections[index] || ""}
                                    onChange={handleChange(index)}
                                    inputProps={{
                                        name: PARENT_ID,
                                        id: PARENT_ID,
                                    }}
                                >
                                    {categoryList.map((category: Category, index: number) => {
                                        return (
                                            <MenuItem
                                                key={`${category.title}-${index}`}
                                                value={category._id}>
                                                {category.title}
                                            </MenuItem>);
                                    })}
                                </Select>
                            </FormControl>
                        );
                    })}
                </Container>
                <Button variant="contained" color="primary" onClick={handleSave} className={classes.submitButton}>Save</Button>
            </form>
        </Paper>
    )
}

const mapStateToProps = (state: State) => {
    return {
        categories: state.categoryReducer.categories
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {

    }
}

const ConnectedCategoryAdd = connect(mapStateToProps, mapDispatchToProps)(CategoryAdd);

export { ConnectedCategoryAdd as CategoryAdd }