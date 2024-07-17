import { Icon } from '../../../ui/icon/Icon'
import styled from 'styled-components'

const SocialMediaIcons = () => {
  return (
    <SocialList>
      <SocialItem>
        <SocialLink href={'https://t.me/VasilenkoEvgen'} rel={'noreferrer'}>
          <Icon iconId={'telegram'} />
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
        <SocialLink href={'https://www.codewars.com/users/yevhenkr'} rel={'noreferrer'}>
          <Icon iconId={'codeWars'} />
        </SocialLink>
      </SocialItem>

      <SocialItem>
        <SocialLink href={'https://github.com/yevhenkr'} rel={'noreferrer'}>
          <Icon iconId={'gitHub'} />{' '}
        </SocialLink>
      </SocialItem>

      <SocialItem>
        <SocialLink href={'mailto:vasilenkoevgen88@gmail.com'} rel={'noreferrer'}>
          <Icon iconId={'email1'} iconId2={'email2'} viewBox={'0 0 60 60'} />{' '}
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
  justify-content: center;
  width: 100%;
  padding-left: 0;
`
const SocialItem = styled.li``
const SocialLink = styled.a`
  target: blank;
`
