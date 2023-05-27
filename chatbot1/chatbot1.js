// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
function generateResponse(input) {
    // Add chatbot logic here
    const query = input.toLowerCase();

    // Check for common e-learning questions and provide relevant responses
    if (query.includes("skills")) {
      return "Tejas has various skills like web development, Internet of Things, Cyber security knowledge to some extent";
    } 
    else if (query.includes("projects")) {
      return "You can explore the project section of the portfolio to the in detatil project explanation .";
    }
    else if (query.includes("hey")) {
      return "Welcome Variableverse learning platform!!! how may I help you ?";
    }
    else if (query.includes("hello")) {
      return "Welcome Variableverse learning platform!!! how may I help you ?";
    }
    else if (query.includes("hie")) {
      return "Welcome Variableverse learning platform!!! how may I help you ?";
    }
    else if (query.includes("projectlist")) {
      return "1.Web development 2.Internet of Things 3.Notes of Btech based on Semester. ";
    }
     else if (query.includes("certificate")) {
      return "Yes, we offer certificates of completion for all our courses. Once you finish the course requirements, you can download your certificate from your account dashboard.";
    }
     else if (query.includes("payment")) {
      return "We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. You can select your preferred payment option during the enrollment process.";
    }
     else if (query.includes("name")) {
      return "I am variable, a chat bot specially integrated for Mr.Tejas Gupta's Portfolio.";
    }
     else if (query.includes("services")) {
      return " We offer web development and cyber security services, even make Miniprojects based on the requirement and provide notes of B.tech.";
    }
     else if (query.includes("examples")) {
      return "Yes, I have experience in creating IoT projects and web development projects. You can check out my projects on my GitHub pages and also check my project section.";
    }
     else if (query.includes("skills")) {
      return "My skills include HTML, CSS, JavaScript, Cyber Security, Internet of Things (IoT), and Python.";
    }
     else if (query.includes("contact")) {
      return "You can contact me through email at guptatejas86@gmail.com or fill out the contact form on the website or evn can connect with me on socia media.";
    }
     else if (query.includes("CV")) {
      return "Yes, you can download my CV by clicking on the Download CV link on the About Me section..";
    }
     else if (query.includes("resume")) {
      return "Yes, you can download my CV by clicking on the Download CV link on the About Me section..";
    }
     else if (query.includes("socialmedia")) {
      return "Yes, you can find me on LinkedIn, Twitter, and GitHub. You can find the links on the Skills section of the website..";
    }
     else if (query.includes("hire")) {
      return "If you are interested in hiring me, please fill out the contact form on the website, and I will get back to you as soon as possible.";
    }
     else {
      // If the input does not match any known e-learning questions, provide a generic response
      return "I'm sorry, I'm not sure I understand your question. Could you please rephrase it or try asking something else related to e-learning?";
    }
  }
  
  
  
