let inch=parseFloat(prompt("인치 값을 입력하세요."));
let cm;

cm=((inch*2.54).toFixed(1));
alert(`${inch} 인치는 ${cm} cm 입니다.`);