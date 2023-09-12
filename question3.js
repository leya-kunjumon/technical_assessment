
Input[0]['name'] = "Menu1";
Input[0]['id'] = "3";
Input[0]['child'] = Input[0]['parent'];
delete Input[0]['parent'];
Input[0]['child']['child'] = Input[0]['child']['parent'];
delete Input[0]['child']['parent'];
Input[0]['child']['child']['name'] = "Menu3";
Input[0]['child']['child']['id'] = "1";
Input[1]['name'] = "Menu11";
Input[1]['id'] = "44";
Input[1]['child'] = Input[1]['parent'];
delete Input[1]['parent'];
Input[1]['child']['name'] = "Menu22";
Input[1]['child']['id'] = "33";
Input[1]['child']['child'] = Input[1]['child']['parent'];
delete Input[1]['child']['parent'];
Input[1]['child']['child']['name'] = "Menu33";
Input[1]['child']['child']['id'] = "22";
Input[1]['child']['child']['child'] = Input[1]['child']['child']['parent']
delete Input[1]['child']['child']['parent'];
Input[1]['child']['child']['child']['name'] ="Menu44";
Input[1]['child']['child']['child']['id'] ="11";












