import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Input, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }
    render() {
        return (
            <Card>
                <CardItem>
                    <Input 
                    label="Name"
                    placeholder="Jane"
                    value={this.props.name}
                    onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardItem>
                <CardItem>
                    <Input 
                    label="Phone"
                    placeholder="533 858 9696"
                    value={this.props.phone}
                    onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardItem>
                <CardItem >
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thusrday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardItem>
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardItem>
            </Card>
        );
    }
}
const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
    }
};
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
