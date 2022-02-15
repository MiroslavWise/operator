import styled from 'styled-components';
import { baseTheme } from '/theme'

const Modal = styled.div`
  background-color: ${baseTheme.colors.secondary};
  height: ${baseTheme.sizes.modal.height}px;
  z-index: ${baseTheme.order.modal};
`

const Container = styled.div`
background-color: ${baseTheme.colors.bg};
width: ${baseTheme.sizes.container}
`


const Operator = (props) => {
    return(
        <Container>
            <Modal>

            </Modal>
        </Container>
    )
}

export default Operator;