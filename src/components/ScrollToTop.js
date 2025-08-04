import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // URL에 #해시가 있는 경우 (예: /#About)
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // 페이지가 렌더링될 시간을 약간 주고 부드럽게 스크롤합니다.
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // #해시가 없는 경우, 페이지 맨 위로 스크롤합니다.
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // URL 경로 또는 해시가 바뀔 때마다 이 효과를 실행합니다.

  return null;
}