import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 220,
    }
});

class BasicFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source: props.filters.source
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        this.props.onSubmit(this.state);
    }

    handleChange(name) {
        return event => {
            this.setState({ [name]: event.target.value });
        };
    }

    render () {
        const { classes, sources } = this.props;
        return (
            <form className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor='delivery-simple'>Источник данных</InputLabel>
                    <Select
                        value={this.state.source}
                        onChange={this.handleChange('source')}
                        input={<Input id='source-simple' />}>
                        <MenuItem value=''>
                            <em>Не выбран</em>
                        </MenuItem>
                        {sources.map((source, index) => (
                            <MenuItem key={index} value={source.dataset}>{source.displayName}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button onClick={this.handleSubmit} color='primary'>
                    Применить
                </Button>
            </form>
        );
    }
}

BasicFilters.propTypes = {
    classes: PropTypes.object.isRequired,
    sources: PropTypes.array,
    filters: PropTypes.object,
    onSubmit: PropTypes.func
};

export default withStyles(styles)(BasicFilters);