const dataSet = [
  {
    id: 1,
    question: '다른 팀과 처음 만났다. 옆 팀에는 예전부터 친한 친구, 그 옆 팀에는 내게 춤을 가르쳐준 선생님도 있는데 어떻게 할까?',
    answers: [
      {content: '팀마다 찾아가서 반갑게 인사를 나눈다', target: 'valueC', value: 1},
      {content: '이제 곧 경쟁할 사이. 인사는 나중에 해도 늦지 않는다.', target: 'valueC', value: -1}
    ]
  },
  {
    id: 2,
    question: `'약자 지목 배틀'에서 내가 약자로 지목받았다. 지금 당신의 기분은?`,
    answers: [
      {content: '내가 약자라고?! 분노로 주먹이 떨린다', target: 'valueC', value: 1},
      {content: '어차피 배틀에서 이기면 되지 뭐. 쿨하게 받아들인다', target: 'valueC', value: -1}
    ]
  },
  {
    id: 3,
    question: '배틀 중 상대방의 바지가 다리에 걸렸다! 이대로 있으면 더 이상 퍼포먼스를 못 할수도 있을것 같은데... 일단 도와줄까?',
    answers: [
      {content: '실수 때문에 퍼포먼스 기회를 날리는 건 안타깝다. 일단 도와준다', target: 'valueA', value: 1},
      {content: '상대의 실수는 내 기회다! 가만히 지켜본다', target: 'valueA', value: -1},
    ]
  },
  {
    id: 4,
    question: '팀원이 1:1 배틀에서 여러 번 패배했다. 속상해서 우는 팀원에게 당신이 건네줄 한 마디는?',
    answers: [
      {content: '다음에 더 잘 하면 돼', target: 'valueB', value: -1},
      {content: '열심히 했어', target: 'valueB', value: 1},
    ]
  },
  {
    id: 5,
    question: '중요한 역할을 맡은 팀원이 리허설 중에 다리를 다쳤다. 생각보다 심한 부상인 것 같은데... 다친 팀원은 어떻게든 무대에 오르고 싶다고 고집을 부리는 상황. 어떻게 할까?',
    answers: [
      {content: '그래도 건강이 우선이다. 다친 팀원을 빼고 무대에 오른다', target: 'valueC', value: 1},
      {content: '팀원의 의지를 존중해서 함께 무대에 오른다. ', target: 'valueC', value: -1}
    ]
  },
  {
    id: 6,
    question: '심사위원들의 평가를 기다리고 있다. 다음 중 내가 더 듣고 싶은 심사평은?',
    answers: [
      {content: '표현하고자 의도한 것이 잘 전달됐다.', target: 'valueB', value: -1},
      {content: '멋진 퍼포먼스였다. ', target: 'valueB', value: 1},
    ]
  },
  {
    id: 5,
    question: '드디어 첫 기사가 공개됐다. 그동안 수고한 내 자신에게 박수! 오늘 저녁은 어떻게 보낼까?',
    answers: [
      {content: '선배들과 함께 뒷풀이 모임을 갖는다', target: 'valueA', value: 1},
      {content: '조용히 혼자만의 시간을 보낸다', target: 'valueA', value: -1},
    ]
  },
]

export default dataSet;