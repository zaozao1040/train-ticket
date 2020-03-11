import React, { useCallback } from 'react';
import styles from './index.less';
import Header from '../components/Header.jsx';

export default () => {
  //使用useCallback包裹起来，这样App每次渲染时，不会引起onBack重渲染
  //当useMemo返回一个函数时，可以用useCallback代替
  const onBack = useCallback(() => {
    window.history.back();
  }, []);
  return (
    <div>
      <Header title="mytitle" onBack={onBack}></Header>
      <h1 className={styles.title}>Page index</h1>
      <span className="iconfont icon-wenhaoyuanyiwenxianxing"></span>
    </div>
  );
};
