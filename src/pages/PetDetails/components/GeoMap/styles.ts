import styled from 'styled-components'
import { MapContainer as ContainerLeaflet } from 'react-leaflet'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors['blue-600']};
  border-radius: 20px;
  border: 2px solid #dde3f0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`

export const MapContainer = styled(ContainerLeaflet)`
  width: 100%;
  height: 227px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom: 3px solid #dde3f0;

  .leaflet-control-attribution {
    display: none;
  }
`

export const Icon = styled.div`
  background-color: #0d3b66;
  border-radius: 20px;
  width: 70px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 10;
  top: -78px;
  left: -30px;
  z-index: 999;

  img {
    width: 32px;
    height: 32px;
  }

  &::after {
    content: '';
    width: 20px;
    height: 20px;
    background-color: #0d3b66;
    rotate: 45deg;
    position: absolute;
    bottom: -8px;
    border-radius: 2px;
    z-index: 6;
  }
`

export const LinkRedirect = styled(Link)`
  color: ${({ theme }) => theme.colors['yellow-100']};
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  padding: 20px 0;
`

export const RequirementsContainer = styled.div``
