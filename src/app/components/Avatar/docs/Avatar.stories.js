import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select, number, boolean, color } from '@storybook/addon-knobs';
import storyPreview from '@util/storyPreview';

import { Avatar } from '@components';

import AvatarDocumentation from './Avatar.md';

storiesOf('Components|Data Display', module)
  .addParameters({ jest: ['Avatar'] })
  .add(
    'Avatar',
    storyPreview(AvatarDocumentation, () => {
      const showImage = boolean('Show Avatar Image', true);
      return (
        <Avatar
          size={number('Size', 60, {})}
          alt="Avatar"
          shape={select('Shape', ['circle', 'square'], 'circle')}
          letter={text('Letter', 'S')}
          _showAvatarImage={showImage}
          letterColor={color('Letter color', '#333')}
          bgColor={color('Background color', '#efefef')}
          onError={action('Error occured during image load.')}
          src={
            showImage
              ? text('Source', 'https://www.w3schools.com/howto/img_avatar.png')
              : null
          }
        />
      );
    })
  );
