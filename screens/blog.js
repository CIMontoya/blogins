import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button

} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import styles from './styles';



export default class Blog extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
        It’s a cloudy, crisp mid-winter morning. I’m trudging through ankle high drifts of snow.

Skirting around the outer edge of a neighbor’s yard I pop through a hole in a hedge finding myself in the woods behind their home. The snow impedes my progress. White miniature clouds escape my lips as I slog further into the woods, looking for the trail that leads to the pond.

I’m praying silently that it is frozen. I’ve been dying to test out the Christmas present I received, a pair of skates, slung over my shoulder, laces tied together, for weeks now.

But the pond and the weather have not been cooperating.

Today, it’s very cold. It’s been below freezing all week. My hopes are up.

I’m sure I’ll be the first one there.

It’s early.

The trail finds me and I walk along it ducking under a branch hanging low, weighed down from a fresh snowfall.

I can hear birds chittering, and a squeal practically at my feet reveals a chipmunk scattering away from my approach. Its’ hindquarters disappearing into a small hole by a fallen birch.

The trees close in on the trail before me, then suddenly fall away, and the pond comes in to view. I come in on the wrong end. There are large rocks sticking out of the icy surface like mountains on a plain of tundra. I push through a small copse of bare bushes and make my way around the edge of it.

Then I break out into a small expanse of open tree-free land bordering the opposite end of the pond.

I look out over the surface. Looks solid. I drop my skates and step gingerly onto the ice, testing with one foot while leaving one foot on land. Nothing. No cracking sounds. No noises to indicate a potential problem.

A light breeze swirls some dead leaves,  that managed to escape the recent snowfall, into the air to my left. The leaves fall haphazardly back to earth as the breeze fades, some of them finding the pond’s surface.

Yes, I think happily.

I put both feet onto the ice, slowly shuffling around, dragging my boots over the smooth, glasslike finish below me.

I leave the pond and sit on the snow covered ground, grabbing my skates.

Untying them, I pull one boot off and one skate on. Then the other boot and skate follow. Tightly tied, double knotted; I stand.

Wobbling, but OK.

It’s been a year, but once you learn to skate it’s just like riding a bike, right?

You never forget.

I breathe deeply, and step onto the ice.

Whoops.

Ok, steady now.

There we go!

I slowly push off and glide toward the center of the small pond. I stop in the middle and look around.

It is silent now. No wind, no birds, just my breathing.

I know the peace will be broken soon as other kids from my neighborhood descend on this magical place.

But for now it’s all mine.

And I skate anywhere I want over the surface.

This is paradise!

      </Text>
      </View>
    )
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}
