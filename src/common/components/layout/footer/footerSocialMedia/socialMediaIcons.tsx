import { Icon } from '../../../ui/icon/Icon'
import styled from 'styled-components'

const SocialMediaIcons = () => {
  return (
    <SocialList>
      <SocialItem>
        <SocialLink href={'https://t.me/VasilenkoEvgen'} rel={'noreferrer'}>
          <Icon iconId={'x'} viewBox="0 0 31 31" />
        </SocialLink>
      </SocialItem>

      <SocialItem>
        <SocialLink
          href={'https://www.linkedin.com/in/yevhen-vasilenko-0a2171161/'}
          rel={'noreferrer'}
        >
          <Icon iconId={'linkedIn'} />
        </SocialLink>
      </SocialItem>

      <SocialItem>
        <SocialLink href={'https://github.com/yevhenkr'} rel={'noreferrer'}>
          <Icon iconId={'gitHub'} viewBox="0 0 31 31"/>{' '}
        </SocialLink>
      </SocialItem>
    </SocialList>
  )
}

export default SocialMediaIcons

const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: end;
    align-items: center;
  padding-left: 0;
`
const SocialItem = styled.li``
const SocialLink = styled.a`
   display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    
`
