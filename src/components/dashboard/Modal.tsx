import { CloseButton, Content, Header, HeaderText, StyledModal, Wrapper } from '../StyledComponents';

type ModalProps={
    isShown: boolean;
    hide: () => void;
    selectedImage: string;
}

const Modal = ({isShown, hide , selectedImage}:ModalProps) => {
    return(
        isShown ? <>
            <Wrapper>
                <StyledModal>
                    <Header>
                        <HeaderText>Image</HeaderText>
                        <CloseButton onClick={hide}>X</CloseButton>
                    </Header>
                    <Content>
                        <img 
                            src={selectedImage} 
                            alt="" 
                            width="400px" 
                            height="400px"
                         /> 
                    </Content>
                </StyledModal>
            </Wrapper>
        </> 
        : null
    );
};
export default Modal;
