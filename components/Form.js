import React from 'react';

import { StyleSheet, Button, View, TextInput } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function Form({ addArticle }) {
  return (
    <View>
      <Formik
        initialValues={{ name: '',  full: '', img: '' }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.name}
              placeholder="title"
              onChangeText={props.handleChange('name')}
            />
            
            <TextInput
              style={styles.input}
              value={props.values.full}
              multiline
              placeholder="full info"
              onChangeText={props.handleChange('full')}
            />
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder="img"
              onChangeText={props.handleChange('img')}
            />
            <Button title="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 15,
    padding: 15,
    borderColor: 'silver',
    borderRadius: 5,
  },
});
