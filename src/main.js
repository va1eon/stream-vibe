import OverlayMenu from '@/modules/OverlayMenu'
import SliderCollection from '@/modules/SliderCollection'
import TabsCollection from '@/modules/TabsCollection'
import VideoPlayerCollection from '@/modules/VideoPlayerCollection'
import InputMaskCollection from '@/modules/InputMaskCollection'

document.addEventListener('DOMContentLoaded', () => {
  new OverlayMenu()
  new SliderCollection()
  new TabsCollection()
  new VideoPlayerCollection()
  new InputMaskCollection()
})