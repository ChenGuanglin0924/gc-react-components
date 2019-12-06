import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox, Button, CheckboxGroup } from '../../components/index';
import '../../components/checkbox/style';

storiesOf('Checkbox', module)
    .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
    .add(
        'unControlled',
        () => {
            return (
                <div className='demo'>
                    <Checkbox defaultChecked={true} onChange={(checked) => console.log(checked)}>Checked</Checkbox>
                    <Checkbox onChange={(checked) => console.log(checked)}>unChecked</Checkbox>
                    <Checkbox defaultChecked={true} disabled onChange={(checked) => console.log(checked)}>Checked disabled</Checkbox>
                    <Checkbox defaultChecked={false} disabled onChange={(checked) => console.log(checked)}>unChecked disabled</Checkbox>
                </div>
            )
        }
    )
    .add(
        'controlled',
        () => {
            const [checked, setChecked] = useState(false);
            const [disabled, setDisabled] = useState(false);

            const onChange = (params) => {
                setChecked(params.checked);
            }

            return (
                <div className='demo'>
                    <Checkbox checked={checked} onChange={onChange} disabled={disabled}>Controlled</Checkbox>
                    <Button onClick={() => { setChecked(checked => !checked) }}>{checked ? 'UnCheck' : 'Check'}</Button>
                    <Button onClick={() => { setDisabled(disabled => !disabled) }}>{disabled ? 'Disabled' : 'Enable'}</Button>
                </div>
            )
        }
    )
    .add(
        'CheckboxGroup',
        () => {
            const options1 = ['Apple', 'Orange', 'Pear', 'Banana'];
            const checkedValues1 = ['Orange', 'Banana'];
            const options2 = [
                {
                    label: 'Apple',
                    value: 'apple',
                    disabled: true
                },
                {
                    label: 'Orange',
                    value: 'orange'
                },
                {
                    label: 'Pear',
                    value: 'pear',
                    disabled: true
                },
                {
                    label: 'Banana',
                    value: 'banana'
                }
            ];
            const checkedValues2 = ['orange', 'banana'];

            return (
                <>
                    <div className='demo' style={{display: 'flex', justifyContent: 'center'}}>
                        <span>array[]</span>
                        <CheckboxGroup options={options1} checkedValues={checkedValues1} onChange={values => console.log(values)} />
                    </div>
                    <div className='demo' style={{display: 'flex', justifyContent: 'center'}}>
                        <span>array[] disabled</span>
                        <CheckboxGroup options={options1} checkedValues={checkedValues1} disabled onChange={values => console.log(values)} />
                    </div>
                    <div className='demo' style={{display: 'flex', justifyContent: 'center'}}>
                        <span>option[]</span>
                        <CheckboxGroup options={options2} checkedValues={checkedValues2} onChange={values => console.log(values)} />
                    </div>
                </>
            )
        }
    )
    .add(
        'check All',
        () => {
            const options = ['Apple', 'Orange', 'Pear', 'Banana'];
            const defaultValues = ['Orange'];

            const [checkAll, setCheckAll] = useState(options.length === defaultValues.length);
            const [selectedValues, setSelectedValues] = useState(defaultValues);

            const onChange = (values) => {
                setCheckAll(values.length === options.length);
                setSelectedValues(values);
            }

            const onCheckAllChange = (params) => {
                setCheckAll(params.checked);
                setSelectedValues(params.checked ? options : []);
            }

            return (
                <div className='demo'>
                    <Checkbox checked={checkAll} onChange={onCheckAllChange}>全选</Checkbox>
                    <br/>
                    <CheckboxGroup options={options} checkedValues={selectedValues} onChange={onChange} />
                </div>
            )
        }
    )
    