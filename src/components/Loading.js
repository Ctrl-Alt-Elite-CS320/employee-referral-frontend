import React, {useState} from "react";

export default function Loading({ isLoading }) {
  if (isLoading) {
    return (
      <div style={styles.container}>
        <img style={styles.loadingImage} src={require('../assets/loading.gif').default}/>
        <div style={{color:'white', fontSize:24, fontFamily: "Nunito", padding:10}}>Sending...</div>
      </div>
    );
  } else {
    return <div></div>;
  }
  
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    position: 'fixed',
    zIndex: 5,
    backgroundColor: '#00000055',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingImage: {
    position: 'relative',
    width: 250,
    borderRadius: 10,
  }
}