import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import { ThemeProvider, ColorMode } from 'theme-ui';
import { Global } from '@emotion/core';
import Layout from '../components/layout';
import theme from '../components/theme';

const name = "Saint John's Research Club";
const desc = "A one stop hub for conducting a research project at Saint John's";

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>{name}</title>
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="@lachlanjc" />
          <meta property="twitter:description" content={desc} />
          <meta property="og:title" content={name} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://lachlanjc.me/" />
          <meta property="description" content={desc} />
        </Head>
        <ThemeProvider theme={theme}>
          <ColorMode />
          <Global
            styles={theme => ({
              body: {
                fontFamily: theme.fonts.body,
                lineHeight: theme.lineHeights.body,
                fontWeight: theme.fontWeights.body,
                color: theme.colors.text,
                backgroundColor: theme.colors.background,
                margin: 0,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                '*': {
                  boxSizing: 'border-box'
                },
                img: {
                  maxWidth: '100%'
                }
              }
            })}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    );
  }
}
