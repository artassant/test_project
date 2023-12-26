var jsPsych = initJsPsych({
    on_finish: function () {
      jsPsych.data.displayData("csv");
    },
  });;

var consent_screen = {
    type: jsPsychHtmlButtonResponse,
    stimulus:
      "<h3>Welcome to the experiment</h3> \
    <p style='text-align:left'>This is a mock experiment. If you choose to participate, your identity will be anonymised.</p> \
    <p style='text-align:left'> The only data that we record will be your response accuracy and reaction times to the test questions. </p>",
    choices: ["Yes, I consent to participate"],
  };

  var instruction_screen_1 = {
    type: jsPsychHtmlButtonResponse,
    stimulus:
      "<h3>Instructions</h3> \
    <p style='text-align:left'>In this experiment you will be shown a picture and a word.\
    Answer 'yes' or 'no' to whether the word matches the image. </p>",
    choices: ["Click to proceed to the next page"],
  };


var trial_carrot_1 = {
    type: jsPsychImageButtonResponse,
    stimulus: "images/carrot.png",
    prompt: '<p style="font-size:24px" >parrot</p>',   
    choices: ["yes","no"],
};

var trial_bin_1 = {
    type: jsPsychImageButtonResponse,
    stimulus: "images/bin.png",
    prompt: '<p style="font-size:24px" >gin</p>',   
    choices: ["yes","no"],
};

var trial_pool_1 = {
    type: jsPsychImageButtonResponse,
    stimulus: "images/pool.png",
    prompt: '<p style="font-size:24px" >steak</p>',   
    choices: ["yes","no"],
};

var trial_parrot_1 = {
    type: jsPsychImageButtonResponse,
    stimulus: "images/parrot.png",
    prompt: '<p style="font-size:24px" >parrot</p>',   
    choices: ["yes","no"],
};

var trial_pool_2 = {
    type: jsPsychImageButtonResponse,
    stimulus: "images/pool.png",
    prompt: '<p style="font-size:24px" >pool</p>',   
    choices: ["yes","no"],
};


var trial_carrot_2 = {
    type: jsPsychImageButtonResponse,
    stimulus: "images/carrot.png",
    prompt: '<p style="font-size:24px" >leek</p>',   
    choices: ["yes","no"],
};

var trial_brain_1 = {
    type: jsPsychImageButtonResponse,
    stimulus: "images/brain.png",
    prompt: '<p style="font-size:24px" >cloud</p>',   
    choices: ["yes","no"],
};

var trial_carrot_3 = {
    type: jsPsychImageButtonResponse,
    stimulus: "images/carrot.png",
    prompt: '<p style="font-size:24px" >carrot</p>',   
    choices: ["yes","no"],
};

var trial_brain_2 = {
    type: jsPsychImageButtonResponse,
    stimulus: "images/brain.png",
    prompt: '<p style="font-size:24px" >train</p>',   
    choices: ["yes","no"],
};

var trial_bin_2 = {
    type: jsPsychImageButtonResponse,
    stimulus: "images/bin.png",
    prompt: '<p style="font-size:24px" >bin</p>',   
    choices: ["yes","no"],
};

var trial_brain_3 = {
    type: jsPsychImageButtonResponse,
    stimulus: "images/brain.png",
    prompt: '<p style="font-size:24px" >brain</p>',   
    choices: ["yes","no"],
};

var trial_parrot_2 = {
    type: jsPsychImageButtonResponse,
    stimulus: "images/parrot.png",
    prompt: '<p style="font-size:24px" >owl</p>',   
    choices: ["yes","no"],
};

var trial_bin_3 = {
    type: jsPsychImageButtonResponse,
    stimulus: "images/bin.png",
    prompt: '<p style="font-size:24px" >lasso</p>',   
    choices: ["yes","no"],
};

var trial_pool_3 = {
    type: jsPsychImageButtonResponse,
    stimulus: "images/pool.png",
    prompt: '<p style="font-size:24px" >tool</p>',   
    choices: ["yes","no"],
};

var trial_parrot_3 = {
    type: jsPsychImageButtonResponse,
    stimulus: "images/parrot.png",
    prompt: '<p style="font-size:24px" >carrot</p>',   
    choices: ["yes","no"],
};


var final_screen = {
    type: jsPsychHtmlKeyboardResponse,
    choices: "ALL_KEYS",
    stimulus:
      "<h3>Thank you for participating!</h3>\
      You can press any key."
};



var full_timeline = [consent_screen,
    instruction_screen_1,
    trial_bin_1,
    trial_pool_1,
    trial_parrot_1,
    trial_pool_2,
    trial_carrot_1,
    trial_brain_2,
    trial_parrot_3,
    trial_bin_2,
    trial_carrot_2,
    trial_pool_3,
    trial_bin_3,
    trial_brain_1,
    trial_carrot_3,
    trial_parrot_2,
    trial_brain_3,
    final_screen
];

jsPsych.run(full_timeline);