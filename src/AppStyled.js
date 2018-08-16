import styled from 'styled-components'

export default styled.div`
text-align: center;

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  background-color: ${props => props.theme.bgColor || '#0d0c44'};
  height: 150px;
  padding: 20px;
  color: ${props => props.theme.textColor || 'white'};
  margin-bottom: 20px;
  transition: all 1s ease;
}

.App-title {
  font-size: 1.5em;
}

.App-intro {
  font-size: large;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

`