import styled from 'styled-components';

const ConversationStyle = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;

  .select-conv {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .messages-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .conversation-infos {
    background: #dcd5ed;
    padding: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .username {
    text-transform: uppercase;
  }

  .start-msg {
    font-style: italic;
  }

  .messages {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
    width: .3em;
    }
    
    &::-webkit-scrollbar-track {
      background-color: white;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: grey;
      outline: 1px solid slategrey;
    }
  }

  .sender-box {
    background: #e8e1fa;
    display: flex;
    align-items: center;
  }

  .input-message {
    display: flex;
    width: 100%;
    padding: .5rem;
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  .text {
    width: 90%;
    margin-right: 5px;
    background-color: #fff;
  }

  .button {
    padding: .9rem;
  }

`;

export default ConversationStyle;