export function getDocData(response) {
  const doc = new DOMParser().parseFromString(response, "text/html");
  const dayArr = doc.querySelectorAll(".wnrl_riqi");
  const arr = [];
  for (const item of dayArr) {
    const aClass = item.querySelector("a").className;
    const glClass = item.querySelector(".wnrl_td_gl").className;
    const glText = item.querySelector(".wnrl_td_gl").textContent;
    const bzlClass = item.querySelector(".wnrl_td_bzl").className;
    const bzlText = item.querySelector(".wnrl_td_bzl").textContent;
    arr.push({
      aClass,
      glClass,
      glText,
      bzlClass,
      bzlText
    });
  }

  const firstDay = Array.from(dayArr)[0];
  const lastDay = Array.from(dayArr).pop();
  let firstBlank = 0;
  let lastBlank = 0;
  let firstElement = firstDay.previousElementSibling;
  let lastElement = lastDay.nextElementSibling;
  while (firstElement && firstElement.classList.contains('wnrl_kongbai')) {
    firstBlank++;
    firstElement = firstElement.previousElementSibling;
  }
  while (lastElement && lastElement.classList.contains('wnrl_kongbai')) {
    lastBlank++;
    lastElement = lastElement.nextElementSibling;
  }

  const detailArray = doc.querySelectorAll('.wnrl_k_you');
  const detailArr = [];
  for (const item of detailArray) {
    const biaoti = item.querySelector(".wnrl_k_you_id_biaoti").textContent;
    const riqi = item.querySelector(".wnrl_k_you_id_wnrl_riqi").textContent;
    const nongli = item.querySelector(".wnrl_k_you_id_wnrl_nongli").textContent;
    const ganzhi = item.querySelector(".wnrl_k_you_id_wnrl_nongli_ganzhi") && item.querySelector(".wnrl_k_you_id_wnrl_nongli_ganzhi").textContent;
    const jieri = item.querySelector(".wnrl_k_you_id_wnrl_jieri_neirong") && item.querySelector(".wnrl_k_you_id_wnrl_jieri_neirong").textContent;
    
    detailArr.push({
      biaoti,
      riqi,
      nongli,
      ganzhi,
      jieri
    });
  }

  return {
    firstBlank,
    lastBlank,
    dateArr: arr,
    detailArr
  };
}
