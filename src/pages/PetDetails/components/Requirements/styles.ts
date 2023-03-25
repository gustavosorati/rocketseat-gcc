import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const RequirementCard = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 13px 40px;

  background: linear-gradient(
    to bottom,
    rgba(247, 95, 96, 0.2) 16.45%,
    rgba(241, 81, 86, 0.06) 67.3%
  );
  border: 1px solid #f15156;
  border-radius: 10px;
  color: #f15156;
  font-weight: 600;
  font-size: 18px;
`
