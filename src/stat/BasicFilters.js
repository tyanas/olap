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

class GroupBy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupBy: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ groupBy: event.target.value });
        this.props.onChange(event);
    }

    render() {
        const { classes, source }  = this.props;
        const options = source.fields.filter(field => field.isKeyField);
        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor='groupBy-multiple'>Группировка</InputLabel>
                <Select
                    multiple
                    value={this.state.groupBy}
                    onChange={this.handleChange}
                    input={<Input id='groupBy-multiple' />}>
                    {options.map((field, index) => (
                        <MenuItem key={index} value={field.field}>{field.displayName}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    }
}

GroupBy.propTypes = {
    source: PropTypes.object,
    onChange: PropTypes.func,
    classes: PropTypes.object.isRequired
};

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
        const { classes, sources, selectedSource } = this.props;
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
                {this.state.source && <GroupBy
                    onChange={this.handleChange('groupBy')}
                    source={selectedSource(this.state.source)}
                    classes={classes} />}
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
    selectedSource: PropTypes.func,
    onSubmit: PropTypes.func
};

export default withStyles(styles)(BasicFilters);