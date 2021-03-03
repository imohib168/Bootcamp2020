import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
    margin: 60px 40px;
`;

export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 35px;
    top: 20px;
`;