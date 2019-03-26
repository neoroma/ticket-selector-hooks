import React from 'react'
import styled from 'styled-components'

const Wrap = styled.section`
    font-family: 'scribble';
`

const Header = styled.div`
  background: cornsilk;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 110px;
  align-items: center;
  justify-content: center;
  font-size: large;
`

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Content = styled.div`
  background: PALETURQUOISE;
  width: 75%;
  flex-basis: 400px;
  flex-grow: 3;
  flex-shrink: 0;
`

const Sidebar = styled.div`
  width: 25%;
  flex-basis: 100px;
  flex-grow: 1;
  flex-shrink: 0;
  color: white;
  background: crimson;
`

const Footer = styled.footer`
  display: flex;
  height: 110px;
  align-items: center;
  justify-content: center;
  font-size: large;
`

function Landing() {
  return (
      <Wrap>
        <Header>Header</Header>
        <ContentWrap>
          <Content>Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from 45
            BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classical
            literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.</Content>
          <Sidebar>Sidebar</Sidebar>
        </ContentWrap>
        <Footer>Footer</Footer>
      </Wrap>
  )
}

export default Landing
