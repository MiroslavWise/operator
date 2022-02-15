import styled from 'styled-components';
import { baseTheme } from './theme'

const Modal = styled.div`
  height: ${baseTheme.sizes.modal.height}px;
  z-index: ${baseTheme.order.modal};
`

const Container = styled.div`
width: ${baseTheme.sizes.container}
`


const Operator = (props) => {
    return(
        <Container>
            <Modal>
                <div>sadhfksdf</div>
                <div>asdfsadf</div>
            </Modal>
        </Container>
    )
}

export default Operator;