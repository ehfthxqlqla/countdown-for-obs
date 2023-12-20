# OBS용 기념일 카운트다운

- 자유롭게 수정 및 베포 가능
- OBS에서 웹 브라우저 항목을 추가하시고 링크랑 변수를 함께 조합하여 집어넣으시면 됩니다.
- 일반적으로 OBS 외의 일반 사용자용으로는 추천하지 않습니다.

# 링크
- <a href="https://ehfthxqlqla.github.io/countdown-for-obs/" target="_blank" onclick="alert(`hello`)"></a>

# 변수명들 (query string)
> ?time     / 목표 시간을 설정합니다. 형식은 문자열입니다. `HH:MM:SS@YYYY/MM/DD` 형식으로 표현합니다. 예시) 만약 2023년 12월 25일 0시 0분 0초까지 카운트 다운을 하고 싶다면 `00:00:00@2023/12/25` 으로 표시합니다.

> ?message  / 카운트다운 완료 시 표시할 메시지를 입력합니다. 형식은 문자열입니다.

> ?remove   / 카운트다운 완료 시 페이지를 아무 텍스트도 남기지 않고 비울 여부를 선택합니다. 형식은 참 또는 거짓(0, 1 또는 true, false)입니다. ?message 변수와 함께 사용 할 수 없습니다.

> ?space    / 일, 시간, 분, 초 사이의 띄어쓰기 여부를 결정합니다. 형식은 참 또는 거짓(0, 1 또는 true, false)입니다.

# 변수 활용법 (query string)
> 일반적으로 query string은 `https://example.com/?first=abc?second=def` 와 같은 형식으로 여러개의 변수를 활용 할 수 없습니다. 첫 번째 변수는 `?firstvariable=value1` 와 같은 형식으로 지정하고, 그 다음부터는 `&secondvariable=value2` 와 같은 형식으로 이어 나가야 합니다.
