import React from 'react';
import Bojack from '../../components/Bojack';
import Corona from '../../components/Corona';
import BaseAnimation from '../../components/BaseAnimation';
import styled, { keyframes } from 'styled-components';

function Principal() {
  return (
    <Container> 
      <ContainerBoJack>
        <Bojack style={{ width: 200 }} />
      </ContainerBoJack>

      <ContainerCorona>
        <Rotate duration="8s" iterationCount="infinite">
          <Corona style={{ width: 450 }} />
        </Rotate>
      </ContainerCorona>
    </Container>
  );
}

const Container = styled.div `
  background: url('https://i.pinimg.com/originals/85/03/38/8503382ab76e24973341144e266c5036.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
`

const ContainerBoJack = styled.div`
  position: absolute;
  bottom: 0;
`;

const ContainerCorona = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 32px;
`;

const RotateAnimation = keyframes`  
  0% { transform: rotate(360deg); }
  30% { transform: rotate(240deg); }
  50% { transform: rotate(180deg); }
  70% { transform: rotate(90deg); }
  100% { transform: rotate(0deg); }
`;

const Rotate = styled(BaseAnimation)`
  animation-name: ${RotateAnimation};
`;

export default Principal;
