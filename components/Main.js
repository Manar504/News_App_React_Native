import React from 'react';
import { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
} from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: 'إدخال 161 شاحنة إلى غزة.. وخروج 600 من المصريين والأجانب',
      
      full: ' أذاعت قناة القاهرة الإخبارية، في خبر عاجل لها منذ قليل، استمرار فتح منفذ رفح البري بين مصر وقطاع غزة، وإدخال 161 شاحنة مساعدات إلى القطاع وخروج 600 من المصريين ورعايا الدول الأجنبية من القطاع إلى مصر',
      key: '1',
      img: 'https://images.akhbarelyom.com/images/images/large/20231113214323522.jpg',
    },
    {
      name: '«الصحفيين» تدين استهداف فريق القاهرة الإخبارية وتعزي في استشهاد مصورها',
      
      full: 'تدين نقابة الصحفيين باشد العبارات استمرار العدوان الصهيوني في استهداف الصحفيين وناقلي الحقيقة، والتي جاء آخرها اليوم ضد فريق قناة القاهرة الأخبارية المتواجد في محيط مستشفى الشفاء بقطاع غزة مما اسفر عن استشهاد الزميل أحمد فطيمة مصور القناة وإصابة زميل له في قصف لمحيط مستشفى الشفاء بقطاع غزة، طبقا لما أعلنه الزميل أحمد الطاهري رئيس قطاع القنوات الإخبارية بالشركة المتحدة.',
      key: '2',
      img: 'https://images.akhbarelyom.com/images/images/large/20231113215035477.jpg',
    },
    {
      name: '7 توصيات مهمة لـ«سياحة النواب» للنهوض بقطاع الطيران المدني',
      
      full: 'عقدت لجنة السياحة والطيران المدني بمجلس النواب، برئاسة النائبة نورا علي، اجتماعًا للوقوف على مستجدات منظومة التطوير ورفع كفاءة المطارات وجودة الخدمات المقدمة.',
      key: '3',
      img: 'https://images.akhbarelyom.com/images/images/large/20231113215130829.jpg',
    },
  ]);

  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [article, ...list];
    });
    setModalWindow(false);
  };

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View style={gStyle.main}>
          <Ionicons
            name="close-circle"
            size={34}
            color="red"
            style={styles.iconClose}
            onPress={() => setModalWindow(false)}
          />
          <Text style={styles.title}>Add Articale</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons
        name="add-circle-sharp"
        size={34}
        color="green"
        style={styles.iconAdd}
        onPress={() => setModalWindow(true)}
      />
      <Text style={[gStyle.title, styles.header]}>Add Articale From Here </Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('FullInfo', item)}
          >
            <Image
              style={styles.image}
              source={{
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconAdd: {
    textAlign: 'center',
    marginTop: 15,
  },
  iconClose: {
    textAlign: 'center',
    marginTop: 15,
  },
  image: { width: '100%', height: 200 },
  header: { marginBottom: 30 },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747',
  },

});
