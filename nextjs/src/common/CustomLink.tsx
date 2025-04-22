import { Link } from '@sitecore-jss/sitecore-jss-nextjs'
import LinkNoPrefetch from './LinkNoPrefetch'
import useExperienceEditor from 'src/hooks/useExperienceEditor'

const CustomLink = (props: any) => {
  const { field, children, className, ...rest } = props
  const inExperienceEditor = useExperienceEditor()

  // Handle case where field is a URL string
  if (typeof field === 'string') {
    return (
      <LinkNoPrefetch href={field} className={className} {...rest}>
        {children}
      </LinkNoPrefetch>
    )
  }

  if (field?.value?.linktype === 'external') {
    return (
      <Link field={field} rel="nofollow" target="_blank" {...rest} className={className}>
        {children}
      </Link>
    )
  } else {
    return (
      <>
        {inExperienceEditor ? (
          <Link field={field} {...rest} prefetch={false} className={className}>
            {children}
          </Link>
        ) : field?.value?.href || field?.href ? (
          <LinkNoPrefetch href={(`${field?.value?.href}${field?.value?.anchor && `#${field?.value?.anchor}`}`) || field?.href} className={className}>
            {children ? children : field?.value?.text}
          </LinkNoPrefetch>
        ) : (
          <Link field={field} {...rest} prefetch={false} className={className}>
            {children}
          </Link>
        )}
      </>
    )
  }
}

export default CustomLink
