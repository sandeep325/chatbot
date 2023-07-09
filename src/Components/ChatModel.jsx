import React from "react";
import ChatBot from "react-simple-chatbot";
import props from 'prop-types';
import { ThemeProvider } from 'styled-components';

import ChatModel2 from "./ChatModel2";

function SendEmail(props) {
  const { steps } = props;
  // console.log(`your email is : ${steps?.Ask_email.message}`);
  // console.log(`your query is : ${steps?.your_question.message}`);


  let obj = {
    'email': steps?.Ask_email.message,
    'query': steps?.your_question.message,
    'name': steps?.user_input_for_name.message
  }
  localStorage.setItem('botValues', JSON.stringify(obj));
  return null;
}

SendEmail.props = {
  steps: props.object,
};

SendEmail.defaultProps = {
  steps: undefined,
};


// get  the data  from local storage
const BotData = () => {
  const getData = localStorage.getItem('botValues');
  const ParseData = JSON.parse(getData);
  // console.log(ParseData?.name);
  return (
    <>
      <div className="mainDataContainer">
        <h3>Basic Detail:-</h3>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{ParseData?.name}</td>
            </tr>

            <tr>
              <td>Email:</td>
              <td>{ParseData?.email}</td>
            </tr>

            <tr>
              <td>Your Query:</td>
              <td>{ParseData?.query}</td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  );
}

function ChatModel() {
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: ' #008ae6',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: ' #999999',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  const config = {
    width: "300px",
    // recognitionEnable:true,
    placeholder: 'Talk with bot',
    hideSubmitButton: false,
    height: "400px",
    floating: true,
    botAvatar: 'data:image/jpeg;base64,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VcoMCp2nP0MZedcxaHOv3lYeHdYqdpm3Fu1BeiGuimqJtrLEo6dS8TEqxltOi9VDFWsqIiICIiAiIgIiICIiAiIgIiICIiAiIgLUduXe/T/65/cyLblpm3j7Sw/gnP7qVWJVGLww08mSKKOJoa2zY2NYwcdw7SViR1zTvNlM7VSMPRiwMmW5dxDOA+f9FRUbGkagHv1VRcz33arErj7pVU9MBqwlh7N3koivq3NFnC/aP5ILmHnU+C2GgWn0eINFzflpxU1T1LiOQ5BBuEErW73AeKz4JWu3OBWr0Eeay2ClhAHJFZ7TqritRNV1ZUREQEREBERAREQEREBERAREQeXTMFSWK26n7Sgu9IOYXnSt5hWHUYPEq2cOHMqi9NWMYLucAAue7RYqKio0Y7LH0jWHQZmujyE9mrnFS1TslUOvmqWSHm5s0f7LX2WGNi6gbpof3n8kRhPr893uOo0dfhYAa+SxodpaO2tZSD/qIf8Acp5+yclwQ5jTYZj77i53M3PyWZh+z5jDs4ZK5zicxiaCBYC19SdxN78VU41KXaijOgqqd5O4Mka8nwaSoyvxHPpHFVS/5dLVPHmGWXT20rxoBYdmipNG/kitN2ew1nQTOqKZwfkJizhweDlcT7oO+9uF1bwidsjQ5jmvaRoWkOB8Qt0NA/koyt2SilcXuiyyHfJE58ErvxOjILvG6IkcMi0Cl4gtNZsOAdKnEx2fp9TbyzK+zYiP4pcQf+KvrbekgRW3y1AbYHjfTjojakFROF4FFAD0ceW/WJc97z3ucST5qVZCoq62RVgqlrFUAoPUREBERAREQEREBERAREQEREBERAREQeWXqIgIiICIiBZERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB/9k=',
    userAvatar: 'https://avatars.githubusercontent.com/u/62431221?v=4',
  };

  return <><ThemeProvider theme={theme}>   <ChatBot
    steps={steps}  {...config} headerTitle="Automated Chat Bot" />  </ThemeProvider> </>;
}
export default ChatModel;

const steps = [
  {
    id: "Greet",
    message: "Hello, Welcome to our website",
    trigger: "AskName",
  },
  {
    id: "AskName",
    message: "Please type your name?",
    trigger: "user_input_for_name"
  },
  {
    id: "user_input_for_name",
    user: true,
    trigger: "ask_questions"
  },
  {
    id: "ask_questions",
    message: "Hi {previousValue}, I am Tony the bot, How can i help you!",
    trigger: "informations"
  },
  {
    id: "informations",
    options: [

      {
        value: "Not Now",
        label: "Not Now",
        trigger: "not_now"
      },
      {
        value: "Contact or enquery",
        label: "Contact or enquery",
        trigger: "Contact"
      }

    ]
  },
  {
    id: "not_now",
    message: "You can close the chatbot or query us.",
    trigger: "informations"
  },

  {
    id: "Contact",
    message: "Ok, first, enter your adress-mail",
    trigger: "Ask_email"
  },
  {
    id: "Ask_email",
    user: true,
    trigger: "get_email"
  },

  {
    id: "get_email",
    message: "ok, {previousValue} !! Type your  Query now.",
    trigger: "your_question"
  },
  {
    id: "your_question",
    validator: (value) => {
      if (value == '') {
        return 'Query Can not be a blank.';
      }
      return true;
    },
    user: true,
    trigger: "send_mail"
  },


  {
    id: "send_mail",
    // message: "ok,  there is your message : '{previousValue}' !! The support team will get back to you as soon as possible",
    message: "ok, The support team will get back to you as soon as possible",
    trigger: "thelast"
  },


  {
    id: "thelast",
    component: (
      <SendEmail />
    ),
    trigger: "endlist",
    // asMessage: true,

  },

  {
    id: "endlist",
    component: (
      <BotData />
    ),
    end: true
  }
];