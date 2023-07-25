import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import style from './Home.module.scss';
import 'react-tabs/style/react-tabs.css';
import Header from '../../components/Header/Header';
import FilesUploader from '../../components/FilesUploader/FilesUploader';

const Home: React.FC = () => {
  return (
    <div className={style.HomeContainer}>
      <Header />
      <Tabs>
        <TabList>
          <Tab>MSDS</Tab>
          <Tab>TDS</Tab>
        </TabList>

        <TabPanel>
          <FilesUploader docType="MSDS" />
        </TabPanel>
        <TabPanel>
          <FilesUploader docType="TDS" />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Home;
