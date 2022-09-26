import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon } from '../../components/icon/Icon'
import { IconsGeneralEnum, IconsEditingEnum, IconsPlacesEnum, IconsNavigationEnum, IconsTransportationEnum, IconsStatusEnum, IconsMediaEnum, IconsTechnologyEnum, IconsWeatherEnum, IconsIndustryEnum } from '../../components/icon/types'
import { TextBody } from '../../components/typography/Typography'

const generalList =
  Object.values(IconsGeneralEnum)

const editingList =
  Object.values(IconsEditingEnum)

const placesList =
  Object.values(IconsPlacesEnum)

const navigationList =
  Object.values(IconsNavigationEnum)

const transportationList =
  Object.values(IconsTransportationEnum)

const statusList =
  Object.values(IconsStatusEnum)

const mediaList =
Object.values(IconsMediaEnum)

const technologyList =
Object.values(IconsTechnologyEnum)

const weatherList =
Object.values(IconsWeatherEnum)

const industryList =
Object.values(IconsIndustryEnum)

export default {
  title: 'Icons/Icon',
  component: Icon,
  args: {}
} as ComponentMeta<typeof Icon>

const ComponentWrapper: React.FC<{ title: string, children: React.ReactNode}> = ({
  title,
  children
}) => (
      <div key={title} onClick={() => navigator.clipboard.writeText(`<Icon component={'${title}'} />`)} style={{
        width: 180,
        height: 90,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#3e3e3e',
        borderRadius: 20,
        margin: 8
      }}>
        <div style={{ marginBottom: 12 }} >
          <TextBody size="small">
            {title}
          </TextBody>
        </div>
        {children}
      </div>
)

// Icon General
export const General: ComponentStory<typeof Icon> = (args) => (
  <>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}
    >
      <h2 style={{ margin: '8px 0', color: '#F9F7F4' }}>General</h2>
  </div>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
    {generalList.map((general) => (
      <ComponentWrapper title={general} key={general}>
        <Icon component={general} style={{ width: '24px', height: '24px' }}/>
      </ComponentWrapper>
    ))}
  </div>
  </>
)
General.parameters = { controls: { exclude: ['general'] } }

// Icon Editing
export const EditingActions: ComponentStory<typeof Icon> = (args) => (
  <>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}
    >
      <h2 style={{ margin: '8px 0', color: '#F9F7F4' }}>Editing & Actions</h2>
  </div>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
    {editingList.map((editing) => (
      <ComponentWrapper title={editing} key={editing}>
        <Icon component={editing} style={{ width: '24px', height: '24px' }}/>
      </ComponentWrapper>
    ))}
  </div>
  </>
)
EditingActions.parameters = { controls: { exclude: ['editing'] } }

// Icon Places
export const PlacesAmenities: ComponentStory<typeof Icon> = (args) => (
  <>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}
    >
      <h2 style={{ margin: '8px 0', color: '#F9F7F4' }}>Places & Amenities</h2>
  </div>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
    {placesList.map((places) => (
      <ComponentWrapper title={places} key={places}>
        <Icon component={places} style={{ width: '24px', height: '24px' }}/>
      </ComponentWrapper>
    ))}
  </div>
  </>
)
PlacesAmenities.parameters = { controls: { exclude: ['places'] } }

// Icon Navigation
export const Navigation: ComponentStory<typeof Icon> = (args) => (
  <>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}
    >
      <h2 style={{ margin: '8px 0', color: '#F9F7F4' }}>Navigation</h2>
  </div>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
    {navigationList.map((navigation) => (
      <ComponentWrapper title={navigation} key={navigation}>
        <Icon component={navigation} style={{ width: '24px', height: '24px' }}/>
      </ComponentWrapper>
    ))}
  </div>
  </>
)
Navigation.parameters = { controls: { exclude: ['navigation'] } }

// Icon Transportation
export const Transportation: ComponentStory<typeof Icon> = (args) => (
  <>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}
    >
      <h2 style={{ margin: '8px 0', color: '#F9F7F4' }}>Transportation</h2>
  </div>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
    {transportationList.map((transportation) => (
      <ComponentWrapper title={transportation} key={transportation}>
        <Icon component={transportation} style={{ width: '24px', height: '24px' }}/>
      </ComponentWrapper>
    ))}
  </div>
  </>
)
Transportation.parameters = { controls: { exclude: ['transportation'] } }

// Icon Status
export const Status: ComponentStory<typeof Icon> = (args) => (
  <>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}
    >
      <h2 style={{ margin: '8px 0', color: '#F9F7F4' }}>Status</h2>
  </div>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
    {statusList.map((status) => (
      <ComponentWrapper title={status} key={status}>
        <Icon component={status} style={{ width: '24px', height: '24px' }}/>
      </ComponentWrapper>
    ))}
  </div>
  </>
)
Status.parameters = { controls: { exclude: ['status'] } }

// Icon Media
export const Media: ComponentStory<typeof Icon> = (args) => (
  <>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}
    >
      <h2 style={{ margin: '8px 0', color: '#F9F7F4' }}>Media</h2>
  </div>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
    {mediaList.map((media) => (
      <ComponentWrapper title={media} key={media}>
        <Icon component={media} style={{ width: '24px', height: '24px' }}/>
      </ComponentWrapper>
    ))}
  </div>
  </>
)
Media.parameters = { controls: { exclude: ['media'] } }

// Icon Technology
export const Technology: ComponentStory<typeof Icon> = (args) => (
  <>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}
    >
      <h2 style={{ margin: '8px 0', color: '#F9F7F4' }}>Technology</h2>
  </div>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
    {technologyList.map((technology) => (
      <ComponentWrapper title={technology} key={technology}>
        <Icon component={technology} style={{ width: '24px', height: '24px' }}/>
      </ComponentWrapper>
    ))}
  </div>
  </>
)
Technology.parameters = { controls: { exclude: ['technology'] } }

// Icon Weather
export const Weather: ComponentStory<typeof Icon> = (args) => (
  <>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}
    >
      <h2 style={{ margin: '8px 0', color: '#F9F7F4' }}>Weather</h2>
  </div>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
    {weatherList.map((weather) => (
      <ComponentWrapper title={weather} key={weather}>
        <Icon component={weather} style={{ width: '24px', height: '24px' }}/>
      </ComponentWrapper>
    ))}
  </div>
  </>
)
Weather.parameters = { controls: { exclude: ['weather'] } }

// Icon Industry
export const Industry: ComponentStory<typeof Icon> = (args) => (
  <>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}
    >
      <h2 style={{ margin: '8px 0', color: '#F9F7F4' }}>Industry Specific</h2>
  </div>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
    {industryList.map((industry) => (
      <ComponentWrapper title={industry} key={industry}>
        <Icon component={industry} style={{ width: '24px', height: '24px' }}/>
      </ComponentWrapper>
    ))}
  </div>
  </>
)
Industry.parameters = { controls: { exclude: ['industry'] } }
