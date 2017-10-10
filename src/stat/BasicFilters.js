import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 220,
    },
    textField: {
        margin: theme.spacing.unit,
        width: 200,
    },
});

class BasicFilters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            source: 20,
            dateFrom: '',
            dateTo: '2017-10-10' 
        };
    }

    handleSubmit = () => {
        console.log(this.state);
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    
    render () {
        const { classes } = this.props;
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
                        <MenuItem value={10}>Продажи</MenuItem>
                        <MenuItem value={20}>Закупки</MenuItem>
                        <MenuItem value={20}>Логистика</MenuItem>
                        <MenuItem value={30}>Сотрудники</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id='dateFrom'
                    defaultValue={this.state.dateFrom}
                    label='От'
                    type='date'
                    onChange={this.handleChange('dateFrom')}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }} />
                <TextField
                    id='dateTo'
                    defaultValue={this.state.dateTo}
                    label='До'
                    type='date'
                    onChange={this.handleChange('dateTo')}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }} />
                <Button raised onClick={this.handleSubmit} color='primary'>
                    Применить
                </Button>
            </form>
        );
    }
}

BasicFilters.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicFilters);