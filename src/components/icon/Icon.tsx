import React from 'react'

import { IconProps, IconsEditingEnum, IconsGeneralEnum, IconsIndustryEnum, IconsMediaEnum, IconsNavigationEnum, IconsPlacesEnum, IconsStatusEnum, IconsTechnologyEnum, IconsTransportationEnum, IconsWeatherEnum, IconTypes } from './types'

// Icons General
import { ReactComponent as Bag } from './assets/general/Bag.svg'
import { ReactComponent as Calendar } from './assets/general/Calendar.svg'
import { ReactComponent as Bookmark } from './assets/general/Bookmark.svg'
import { ReactComponent as Call } from './assets/general/Call.svg'
import { ReactComponent as Cart } from './assets/general/Cart.svg'
import { ReactComponent as Comment } from './assets/general/Comment.svg'
import { ReactComponent as Hashtag } from './assets/general/Hashtag.svg'
import { ReactComponent as Heart } from './assets/general/Heart.svg'
import { ReactComponent as Microphone } from './assets/general/Microphone.svg'
import { ReactComponent as Notification } from './assets/general/Notification.svg'
import { ReactComponent as Profile } from './assets/general/Profile.svg'
import { ReactComponent as Search } from './assets/general/Search.svg'
import { ReactComponent as Share } from './assets/general/Share.svg'
import { ReactComponent as Star } from './assets/general/Star.svg'
import { ReactComponent as Tag } from './assets/general/Tag.svg'
import { ReactComponent as ThreePeople } from './assets/general/ThreePeople.svg'
import { ReactComponent as Time } from './assets/general/Time.svg'
import { ReactComponent as TwoPeople } from './assets/general/TwoPeople.svg'

// Icons Editing
import { ReactComponent as AlignCenter } from './assets/editing/AlignCenter.svg'
import { ReactComponent as AlignJustify } from './assets/editing/AlignJustify.svg'
import { ReactComponent as AlignLeft } from './assets/editing/AlignLeft.svg'
import { ReactComponent as AlignRight } from './assets/editing/AlignRight.svg'
import { ReactComponent as Backspace } from './assets/editing/Backspace.svg'
import { ReactComponent as Backward } from './assets/editing/Backward.svg'
import { ReactComponent as Configure } from './assets/editing/Configure.svg'
import { ReactComponent as Copy } from './assets/editing/Copy.svg'
import { ReactComponent as Cut } from './assets/editing/Cut.svg'
import { ReactComponent as Delete } from './assets/editing/Delete.svg'
import { ReactComponent as Edit } from './assets/editing/Edit.svg'
import { ReactComponent as Feather } from './assets/editing/Feather.svg'
import { ReactComponent as Forward } from './assets/editing/Forward.svg'
import { ReactComponent as Hide } from './assets/editing/Hide.svg'
import { ReactComponent as Lock } from './assets/editing/Lock.svg'
import { ReactComponent as Paste } from './assets/editing/Paste.svg'
import { ReactComponent as Pause } from './assets/editing/Pause.svg'
import { ReactComponent as Play } from './assets/editing/Play.svg'
import { ReactComponent as Settings } from './assets/editing/Settings.svg'
import { ReactComponent as ThumbDown } from './assets/editing/ThumbDown.svg'
import { ReactComponent as ThumbUp } from './assets/editing/ThumbUp.svg'
import { ReactComponent as Trophy } from './assets/editing/Trophy.svg'
import { ReactComponent as Unlocked } from './assets/editing/Unlocked.svg'
import { ReactComponent as View } from './assets/editing/View.svg'

// Icons Places
import { ReactComponent as Bed } from './assets/places/Bed.svg'
import { ReactComponent as BuildingGov } from './assets/places/BuildingGov.svg'
import { ReactComponent as Bush } from './assets/places/Bush.svg'
import { ReactComponent as BusinessOffice } from './assets/places/BusinessOffice.svg'
import { ReactComponent as Cake } from './assets/places/Cake.svg'
import { ReactComponent as CarGarage } from './assets/places/CarGarage.svg'
import { ReactComponent as Celebration } from './assets/places/Celebration.svg'
import { ReactComponent as CoffeeCup } from './assets/places/CoffeeCup.svg'
import { ReactComponent as CoffeeMug } from './assets/places/CoffeeMug.svg'
import { ReactComponent as Dryer } from './assets/places/Dryer.svg'
import { ReactComponent as Female } from './assets/places/Female.svg'
import { ReactComponent as GymWeight } from './assets/places/GymWeight.svg'
import { ReactComponent as HairDryer } from './assets/places/HairDryer.svg'
import { ReactComponent as Hangers } from './assets/places/Hangers.svg'
import { ReactComponent as Home } from './assets/places/Home.svg'
import { ReactComponent as HomeMinimal } from './assets/places/HomeMinimal.svg'
import { ReactComponent as HospitalClinic } from './assets/places/HospitalClinic.svg'
import { ReactComponent as Hotel } from './assets/places/Hotel.svg'
import { ReactComponent as KitchenFood } from './assets/places/KitchenFood.svg'
import { ReactComponent as Male } from './assets/places/Male.svg'
import { ReactComponent as PalmTree } from './assets/places/PalmTree.svg'
import { ReactComponent as Parking } from './assets/places/Parking.svg'
import { ReactComponent as PetDog } from './assets/places/PetDog.svg'
import { ReactComponent as PetCat } from './assets/places/PetCat.svg'
import { ReactComponent as PineTree } from './assets/places/PineTree.svg'
import { ReactComponent as PizzaSlice } from './assets/places/PizzaSlice.svg'
import { ReactComponent as Planet } from './assets/places/Planet.svg'
import { ReactComponent as PlanetEarth } from './assets/places/PlanetEarth.svg'
import { ReactComponent as Pool } from './assets/places/Pool.svg'
import { ReactComponent as RoomService } from './assets/places/RoomService.svg'
import { ReactComponent as RoomUpgrade } from './assets/places/RoomUpgrade.svg'
import { ReactComponent as Shower } from './assets/places/Shower.svg'
import { ReactComponent as Towels } from './assets/places/Towels.svg'
import { ReactComponent as TropicalDrinks } from './assets/places/TropicalDrinks.svg'
import { ReactComponent as Washer } from './assets/places/Washer.svg'
import { ReactComponent as WorldNet } from './assets/places/WorldNet.svg'

// Icons Navigation
import { ReactComponent as ActionMinus } from './assets/navigation/ActionMinus.svg'
import { ReactComponent as ActionPlus } from './assets/navigation/ActionPlus.svg'
import { ReactComponent as ArrowBackThick } from './assets/navigation/ArrowBackThick.svg'
import { ReactComponent as ArrowChevronBack } from './assets/navigation/ArrowChevronBack.svg'
import { ReactComponent as ArrowChevronDown } from './assets/navigation/ArrowChevronDown.svg'
import { ReactComponent as ArrowChevronUp } from './assets/navigation/ArrowChevronUp.svg'
import { ReactComponent as ArrowDown } from './assets/navigation/ArrowDown.svg'
import { ReactComponent as ArrowDownThick } from './assets/navigation/ArrowDownThick.svg'
import { ReactComponent as ArrowForwardThick } from './assets/navigation/ArrowForwardThick.svg'
import { ReactComponent as ArrowGoingDown } from './assets/navigation/ArrowGoingDown.svg'
import { ReactComponent as ArrowGoingUp } from './assets/navigation/ArrowGoingUp.svg'
import { ReactComponent as ArrowGoingUpPie } from './assets/navigation/ArrowGoingUpPie.svg'
import { ReactComponent as ArrowReply } from './assets/navigation/ArrowReply.svg'
import { ReactComponent as ArrowSelect } from './assets/navigation/ArrowSelect.svg'
import { ReactComponent as ArrowUp } from './assets/navigation/ArrowUp.svg'
import { ReactComponent as ArrowUpThick } from './assets/navigation/ArrowUpThick.svg'
import { ReactComponent as AtSign } from './assets/navigation/AtSign.svg'
import { ReactComponent as Attach } from './assets/navigation/Attach.svg'
import { ReactComponent as BackArrow } from './assets/navigation/BackArrow.svg'
import { ReactComponent as BackUndo } from './assets/navigation/BackUndo.svg'
import { ReactComponent as Bold } from './assets/navigation/Bold.svg'
import { ReactComponent as Bullets } from './assets/navigation/Bullets.svg'
import { ReactComponent as BulletsNumbered } from './assets/navigation/BulletsNumbered.svg'
import { ReactComponent as Check } from './assets/navigation/Check.svg'
import { ReactComponent as CloseX } from './assets/navigation/CloseX.svg'
import { ReactComponent as CommentRound } from './assets/navigation/CommentRound.svg'
import { ReactComponent as CursorPointer } from './assets/navigation/CursorPointer.svg'
import { ReactComponent as Download } from './assets/navigation/Download.svg'
import { ReactComponent as ExchangeTransfer } from './assets/navigation/ExchangeTransfer.svg'
import { ReactComponent as Export } from './assets/navigation/Export.svg'
import { ReactComponent as FeedList } from './assets/navigation/FeedList.svg'
import { ReactComponent as FontColor } from './assets/navigation/FontColor.svg'
import { ReactComponent as FontHeading } from './assets/navigation/FontHeading.svg'
import { ReactComponent as FontUnderline } from './assets/navigation/FontUnderline.svg'
import { ReactComponent as ForwardArrow } from './assets/navigation/ForwardArrow.svg'
import { ReactComponent as ForwardRedo } from './assets/navigation/ForwardRedo.svg'
import { ReactComponent as FullScreenExpandResize } from './assets/navigation/FullScreenExpandResize.svg'
import { ReactComponent as FullScreenResizeExpand } from './assets/navigation/FullScreenResizeExpand.svg'
import { ReactComponent as GeoLocate } from './assets/navigation/GeoLocate.svg'
import { ReactComponent as GoingDownPie } from './assets/navigation/GoingDownPie.svg'
import { ReactComponent as GridFeedCards } from './assets/navigation/GridFeedCards.svg'
import { ReactComponent as GridMenuCircle } from './assets/navigation/GridMenuCircle.svg'
import { ReactComponent as GridMenuSquare } from './assets/navigation/GridMenuSquare.svg'
import { ReactComponent as HamburgerMenu } from './assets/navigation/HamburgerMenu.svg'
import { ReactComponent as IndentLess } from './assets/navigation/IndentLess.svg'
import { ReactComponent as IndentMore } from './assets/navigation/IndentMore.svg'
import { ReactComponent as Italic } from './assets/navigation/Italic.svg'
import { ReactComponent as Link } from './assets/navigation/Link.svg'
import { ReactComponent as Loading } from './assets/navigation/Loading.svg'
import { ReactComponent as LogInCircle } from './assets/navigation/LogInCircle.svg'
import { ReactComponent as LogInSquare } from './assets/navigation/LogInSquare.svg'
import { ReactComponent as LogOutCircle } from './assets/navigation/LogOutCircle.svg'
import { ReactComponent as LogOutSquare } from './assets/navigation/LogOutSquare.svg'
import { ReactComponent as MenuLeft } from './assets/navigation/MenuLeft.svg'
import { ReactComponent as MenuRight } from './assets/navigation/MenuRight.svg'
import { ReactComponent as More } from './assets/navigation/More.svg'
import { ReactComponent as MoreVertical } from './assets/navigation/MoreVertical.svg'
import { ReactComponent as PowerOnOff } from './assets/navigation/PowerOnOff.svg'
import { ReactComponent as Refresh } from './assets/navigation/Refresh.svg'
import { ReactComponent as Upload } from './assets/navigation/Upload.svg'

// Icons Transportation
import { ReactComponent as Bike } from './assets/transportation/Bike.svg'
import { ReactComponent as Bullhorn } from './assets/transportation/Bullhorn.svg'
import { ReactComponent as CarFront } from './assets/transportation/CarFront.svg'
import { ReactComponent as CarSide } from './assets/transportation/CarSide.svg'
import { ReactComponent as Compass } from './assets/transportation/Compass.svg'
import { ReactComponent as FastGage } from './assets/transportation/FastGage.svg'
import { ReactComponent as Location } from './assets/transportation/Location.svg'
import { ReactComponent as Map } from './assets/transportation/Map.svg'
import { ReactComponent as Plane } from './assets/transportation/Plane.svg'
import { ReactComponent as Send } from './assets/transportation/Send.svg'
import { ReactComponent as Spaceship } from './assets/transportation/Spaceship.svg'
import { ReactComponent as Ticket } from './assets/transportation/Ticket.svg'
import { ReactComponent as Train } from './assets/transportation/Train.svg'
import { ReactComponent as Truck } from './assets/transportation/Truck.svg'

// Icons Status
import { ReactComponent as AlertClose } from './assets/status/AlertClose.svg'
import { ReactComponent as AlertEmpty } from './assets/status/AlertEmpty.svg'
import { ReactComponent as AlertInfo } from './assets/status/AlertInfo.svg'
import { ReactComponent as AlertQuestion } from './assets/status/AlertQuestion.svg'
import { ReactComponent as AlertSuccess } from './assets/status/AlertSuccess.svg'
import { ReactComponent as Disabled } from './assets/status/Disabled.svg'
import { ReactComponent as FlagPie } from './assets/status/FlagPie.svg'
import { ReactComponent as Happy } from './assets/status/Happy.svg'
import { ReactComponent as Help } from './assets/status/Help.svg'
import { ReactComponent as Sad } from './assets/status/Sad.svg'
import { ReactComponent as SaveFavorite } from './assets/status/SaveFavorite.svg'

// Icons Media
import { ReactComponent as Box } from './assets/media/Box.svg'
import { ReactComponent as Camera } from './assets/media/Camera.svg'
import { ReactComponent as CardCollection } from './assets/media/CardCollection.svg'
import { ReactComponent as File } from './assets/media/File.svg'
import { ReactComponent as FileStructure } from './assets/media/FileStructure.svg'
import { ReactComponent as Folder } from './assets/media/Folder.svg'
import { ReactComponent as Image } from './assets/media/Image.svg'
import { ReactComponent as Mail } from './assets/media/Mail.svg'
import { ReactComponent as MusicNote } from './assets/media/MusicNote.svg'
import { ReactComponent as Playlist } from './assets/media/Playlist.svg'
import { ReactComponent as PodCast } from './assets/media/PodCast.svg'
import { ReactComponent as ReadBook } from './assets/media/ReadBook.svg'
import { ReactComponent as Scroll } from './assets/media/Scroll.svg'
import { ReactComponent as SoundMuted } from './assets/media/SoundMuted.svg'
import { ReactComponent as SoundPlaying } from './assets/media/SoundPlaying.svg'
import { ReactComponent as Stack } from './assets/media/Stack.svg'
import { ReactComponent as Video } from './assets/media/Video.svg'
import { ReactComponent as VideoCam } from './assets/media/VideoCam.svg'

// Icons Technology
import { ReactComponent as AutoLayout } from './assets/technology/AutoLayout.svg'
import { ReactComponent as Cast } from './assets/technology/Cast.svg'
import { ReactComponent as Chip } from './assets/technology/Chip.svg'
import { ReactComponent as ColorPalette } from './assets/technology/ColorPalette.svg'
import { ReactComponent as Cube } from './assets/technology/Cube.svg'
import { ReactComponent as Cursor } from './assets/technology/Cursor.svg'
import { ReactComponent as Database } from './assets/technology/Database.svg'
import { ReactComponent as Desktop } from './assets/technology/Desktop.svg'
import { ReactComponent as Diamond } from './assets/technology/Diamond.svg'
import { ReactComponent as Fingerprint } from './assets/technology/Fingerprint.svg'
import { ReactComponent as Inbox } from './assets/technology/Inbox.svg'
import { ReactComponent as Key } from './assets/technology/Key.svg'
import { ReactComponent as LabBeaker } from './assets/technology/LabBeaker.svg'
import { ReactComponent as Laptop } from './assets/technology/Laptop.svg'
import { ReactComponent as Layout } from './assets/technology/Layout.svg'
import { ReactComponent as MasterComponent } from './assets/technology/MasterComponent.svg'
import { ReactComponent as Mouse } from './assets/technology/Mouse.svg'
import { ReactComponent as Phone } from './assets/technology/Phone.svg'
import { ReactComponent as Printer } from './assets/technology/Printer.svg'
import { ReactComponent as QRCode } from './assets/technology/QRCode.svg'
import { ReactComponent as Server } from './assets/technology/Server.svg'
import { ReactComponent as ShieldCheck } from './assets/technology/ShieldCheck.svg'
import { ReactComponent as Shield } from './assets/technology/Shield.svg'
import { ReactComponent as Shreaded } from './assets/technology/Shreaded.svg'
import { ReactComponent as Tablet } from './assets/technology/Tablet.svg'
import { ReactComponent as Type } from './assets/technology/Type.svg'
import { ReactComponent as USB } from './assets/technology/USB.svg'
import { ReactComponent as VerifiedBadge } from './assets/technology/VerifiedBadge.svg'
import { ReactComponent as Watch } from './assets/technology/Watch.svg'
import { ReactComponent as Wifi } from './assets/technology/Wifi.svg'

// Icons Weather
import { ReactComponent as Cloud } from './assets/weather/Cloud.svg'
import { ReactComponent as CloudlyNight } from './assets/weather/CloudlyNight.svg'
import { ReactComponent as CloudSnow } from './assets/weather/CloudSnow.svg'
import { ReactComponent as Heat } from './assets/weather/Heat.svg'
import { ReactComponent as Hurricane } from './assets/weather/Hurricane.svg'
import { ReactComponent as Lightning } from './assets/weather/Lightning.svg'
import { ReactComponent as Moon } from './assets/weather/Moon.svg'
import { ReactComponent as PartlyCloudy } from './assets/weather/PartlyCloudy.svg'
import { ReactComponent as Rain } from './assets/weather/Rain.svg'
import { ReactComponent as Snow } from './assets/weather/Snow.svg'
import { ReactComponent as Stars } from './assets/weather/Stars.svg'
import { ReactComponent as Sun } from './assets/weather/Sun.svg'
import { ReactComponent as Temperature } from './assets/weather/Temperature.svg'
import { ReactComponent as Thunderstorms } from './assets/weather/Thunderstorms.svg'
import { ReactComponent as Tornado } from './assets/weather/Tornado.svg'
import { ReactComponent as Umbrella } from './assets/weather/Umbrella.svg'
import { ReactComponent as WaterDrop } from './assets/weather/WaterDrop.svg'
import { ReactComponent as Wind } from './assets/weather/Wind.svg'

// Icons Industry
import { ReactComponent as Briefcase } from './assets/industry/Briefcase.svg'
import { ReactComponent as Card } from './assets/industry/Card.svg'
import { ReactComponent as CashMoney } from './assets/industry/CashMoney.svg'
import { ReactComponent as ChartBar } from './assets/industry/ChartBar.svg'
import { ReactComponent as ChartPie } from './assets/industry/ChartPie.svg'
import { ReactComponent as DiamondRock } from './assets/industry/DiamondRock.svg'
import { ReactComponent as Dollar } from './assets/industry/Dollar.svg'
import { ReactComponent as Gift } from './assets/industry/Gift.svg'
import { ReactComponent as LawBalance } from './assets/industry/LawBalance.svg'
import { ReactComponent as Medical } from './assets/industry/Medical.svg'
import { ReactComponent as Target } from './assets/industry/Target.svg'

const icons: IconTypes = {

  // IconsGeneralEnum
  [IconsGeneralEnum.BAG]: <Bag />,
  [IconsGeneralEnum.CALENDAR]: <Calendar />,
  [IconsGeneralEnum.BOOKMARK]: <Bookmark />,
  [IconsGeneralEnum.CALL]: <Call />,
  [IconsGeneralEnum.CART]: <Cart />,
  [IconsGeneralEnum.COMMENT]: <Comment />,
  [IconsGeneralEnum.HASHTAG]: <Hashtag />,
  [IconsGeneralEnum.HEART]: <Heart />,
  [IconsGeneralEnum.MICROPHONE]: <Microphone />,
  [IconsGeneralEnum.NOTIFICATION]: <Notification />,
  [IconsGeneralEnum.PROFILE]: <Profile />,
  [IconsGeneralEnum.SEARCH]: <Search />,
  [IconsGeneralEnum.SHARE]: <Share />,
  [IconsGeneralEnum.STAR]: <Star />,
  [IconsGeneralEnum.TAG]: <Tag />,
  [IconsGeneralEnum.THREEPEOPLE]: <ThreePeople />,
  [IconsGeneralEnum.TIME]: <Time />,
  [IconsGeneralEnum.TWOPEOPLE]: <TwoPeople />,

  // IconsEditingEnum
  [IconsEditingEnum.ALIGNCENTER]: <AlignCenter />,
  [IconsEditingEnum.ALIGNJUSTIFY]: <AlignJustify />,
  [IconsEditingEnum.ALIGNLEFT]: <AlignLeft />,
  [IconsEditingEnum.ALIGNRIGHT]: <AlignRight />,
  [IconsEditingEnum.BACKSPACE]: <Backspace />,
  [IconsEditingEnum.BACKWARD]: <Backward />,
  [IconsEditingEnum.CONFIGURE]: <Configure />,
  [IconsEditingEnum.COPY]: <Copy />,
  [IconsEditingEnum.CUT]: <Cut />,
  [IconsEditingEnum.DELETE]: <Delete />,
  [IconsEditingEnum.EDIT]: <Edit />,
  [IconsEditingEnum.FEATHER]: <Feather />,
  [IconsEditingEnum.FORWARD]: <Forward />,
  [IconsEditingEnum.HIDE]: <Hide />,
  [IconsEditingEnum.LOCK]: <Lock />,
  [IconsEditingEnum.PASTE]: <Paste />,
  [IconsEditingEnum.PAUSE]: <Pause />,
  [IconsEditingEnum.PLAY]: <Play />,
  [IconsEditingEnum.SETTINGS]: <Settings />,
  [IconsEditingEnum.THUMBDOWN]: <ThumbDown />,
  [IconsEditingEnum.THUMBUP]: <ThumbUp />,
  [IconsEditingEnum.TROPHY]: <Trophy />,
  [IconsEditingEnum.UNLOCKED]: <Unlocked />,
  [IconsEditingEnum.VIEW]: <View />,

  // IconsPlacesEnum
  [IconsPlacesEnum.BED]: <Bed />,
  [IconsPlacesEnum.BUILDINGGOV]: <BuildingGov />,
  [IconsPlacesEnum.BUSH]: <Bush />,
  [IconsPlacesEnum.BUSINESSOFFICE]: <BusinessOffice />,
  [IconsPlacesEnum.CAKE]: <Cake />,
  [IconsPlacesEnum.CARGARAGE]: <CarGarage />,
  [IconsPlacesEnum.CELEBRATION]: <Celebration />,
  [IconsPlacesEnum.COFFEECUP]: <CoffeeCup />,
  [IconsPlacesEnum.COFFEEMUG]: <CoffeeMug />,
  [IconsPlacesEnum.DRYER]: <Dryer />,
  [IconsPlacesEnum.FEMALE]: <Female />,
  [IconsPlacesEnum.GYMWEIGHT]: <GymWeight />,
  [IconsPlacesEnum.HAIRDRYER]: <HairDryer />,
  [IconsPlacesEnum.HANGERS]: <Hangers />,
  [IconsPlacesEnum.HOME]: <Home />,
  [IconsPlacesEnum.HOMEMINIMAL]: <HomeMinimal />,
  [IconsPlacesEnum.HOSPITALCLINIC]: <HospitalClinic />,
  [IconsPlacesEnum.HOTEL]: <Hotel />,
  [IconsPlacesEnum.KITCHENFOOD]: <KitchenFood />,
  [IconsPlacesEnum.MALE]: <Male />,
  [IconsPlacesEnum.PALMTREE]: <PalmTree />,
  [IconsPlacesEnum.PARKING]: <Parking />,
  [IconsPlacesEnum.PETCAT]: <PetCat />,
  [IconsPlacesEnum.PETDOG]: <PetDog />,
  [IconsPlacesEnum.PINETREE]: <PineTree />,
  [IconsPlacesEnum.PIZZASLICE]: <PizzaSlice />,
  [IconsPlacesEnum.PLANET]: <Planet />,
  [IconsPlacesEnum.PLANETEARTH]: <PlanetEarth />,
  [IconsPlacesEnum.POOL]: <Pool />,
  [IconsPlacesEnum.ROOMSERVICE]: <RoomService />,
  [IconsPlacesEnum.ROOMUPGRADE]: <RoomUpgrade />,
  [IconsPlacesEnum.SHOWER]: <Shower />,
  [IconsPlacesEnum.TOWELS]: <Towels />,
  [IconsPlacesEnum.TROPICALDRINKS]: <TropicalDrinks />,
  [IconsPlacesEnum.WASHER]: <Washer />,
  [IconsPlacesEnum.WORLDNET]: <WorldNet />,

  // IconsNavigationEnum

  [IconsNavigationEnum.ACTIONMINUS]: <ActionMinus />,
  [IconsNavigationEnum.ACTIONPLUS]: <ActionPlus />,
  [IconsNavigationEnum.ARROWBACKTHICK]: <ArrowBackThick />,
  [IconsNavigationEnum.ARROWCHEVRONBACK]: <ArrowChevronBack />,
  [IconsNavigationEnum.ARROWCHEVRONDOWN]: <ArrowChevronDown />,
  [IconsNavigationEnum.ARROWCHEVRONUP]: <ArrowChevronUp />,
  [IconsNavigationEnum.ARROWDOWN]: <ArrowDown />,
  [IconsNavigationEnum.ARROWDOWNTHICK]: <ArrowDownThick />,
  [IconsNavigationEnum.ARROWFORWARDTHICK]: <ArrowForwardThick />,
  [IconsNavigationEnum.ARROWGOINGDOWN]: <ArrowGoingDown />,
  [IconsNavigationEnum.ARROWGOINGUP]: <ArrowGoingUp />,
  [IconsNavigationEnum.ARROWGOINGUPPIE]: <ArrowGoingUpPie />,
  [IconsNavigationEnum.ARROWREPLY]: <ArrowReply />,
  [IconsNavigationEnum.ARROWSELECT]: <ArrowSelect />,
  [IconsNavigationEnum.ARROWUP]: <ArrowUp />,
  [IconsNavigationEnum.ARROWUPTHICK]: <ArrowUpThick />,
  [IconsNavigationEnum.ATSIGN]: <AtSign />,
  [IconsNavigationEnum.ATTACH]: <Attach />,
  [IconsNavigationEnum.BACKARROW]: <BackArrow />,
  [IconsNavigationEnum.BACKUNDO]: <BackUndo />,
  [IconsNavigationEnum.BOLD]: <Bold />,
  [IconsNavigationEnum.BULLETS]: <Bullets />,
  [IconsNavigationEnum.BULLETSNUMBERED]: <BulletsNumbered />,
  [IconsNavigationEnum.CHECK]: <Check />,
  [IconsNavigationEnum.CLOSEX]: <CloseX />,
  [IconsNavigationEnum.COMMENTROUND]: <CommentRound />,
  [IconsNavigationEnum.CURSORPOINTER]: <CursorPointer />,
  [IconsNavigationEnum.DOWNLOAD]: <Download />,
  [IconsNavigationEnum.EXCHANGETRANSFER]: <ExchangeTransfer />,
  [IconsNavigationEnum.EXPORT]: <Export />,
  [IconsNavigationEnum.FEEDLIST]: <FeedList />,
  [IconsNavigationEnum.FONTCOLOR]: <FontColor />,
  [IconsNavigationEnum.FONTHEADING]: <FontHeading />,
  [IconsNavigationEnum.FONTUNDERLINE]: <FontUnderline />,
  [IconsNavigationEnum.FORWARDARROW]: <ForwardArrow />,
  [IconsNavigationEnum.FORWARDREDO]: <ForwardRedo />,
  [IconsNavigationEnum.FULLSCREENEXPANDRESIZE]: <FullScreenExpandResize />,
  [IconsNavigationEnum.FULLSCREENRESIZEEXPAND]: <FullScreenResizeExpand />,
  [IconsNavigationEnum.GEOLOCATE]: <GeoLocate />,
  [IconsNavigationEnum.GOINGDOWNPIE]: <GoingDownPie />,
  [IconsNavigationEnum.GRIDFEEDCARDS]: <GridFeedCards />,
  [IconsNavigationEnum.GRIDMENUCIRCLE]: <GridMenuCircle />,
  [IconsNavigationEnum.GRIDMENUSQUARE]: <GridMenuSquare />,
  [IconsNavigationEnum.HAMBURGERMENU]: <HamburgerMenu />,
  [IconsNavigationEnum.INDENTLESS]: <IndentLess />,
  [IconsNavigationEnum.INDENTMORE]: <IndentMore />,
  [IconsNavigationEnum.ITALIC]: <Italic />,
  [IconsNavigationEnum.LINK]: <Link />,
  [IconsNavigationEnum.LOADING]: <Loading />,
  [IconsNavigationEnum.LOGINCIRCLE]: <LogInCircle />,
  [IconsNavigationEnum.LOGINSQUARE]: <LogInSquare />,
  [IconsNavigationEnum.LOGOUTCIRCLE]: <LogOutCircle />,
  [IconsNavigationEnum.LOGOUTSQUARE]: <LogOutSquare />,
  [IconsNavigationEnum.MENULEFT]: <MenuLeft />,
  [IconsNavigationEnum.MENURIGHT]: <MenuRight />,
  [IconsNavigationEnum.MORE]: <More />,
  [IconsNavigationEnum.MOREVERTICAL]: <MoreVertical />,
  [IconsNavigationEnum.POWERONOFF]: <PowerOnOff />,
  [IconsNavigationEnum.REFRESH]: <Refresh />,
  [IconsNavigationEnum.UPLOAD]: <Upload />,

  // Icons Transportation
  [IconsTransportationEnum.BIKE]: <Bike />,
  [IconsTransportationEnum.BULLHORN]: <Bullhorn />,
  [IconsTransportationEnum.CARFRONT]: <CarFront />,
  [IconsTransportationEnum.CARSIDE]: <CarSide />,
  [IconsTransportationEnum.COMPASS]: <Compass />,
  [IconsTransportationEnum.FASTGAGE]: <FastGage />,
  [IconsTransportationEnum.LOCATION]: <Location />,
  [IconsTransportationEnum.MAP]: <Map />,
  [IconsTransportationEnum.PLANE]: <Plane />,
  [IconsTransportationEnum.SEND]: <Send />,
  [IconsTransportationEnum.SPACESHIP]: <Spaceship />,
  [IconsTransportationEnum.TICKET]: <Ticket />,
  [IconsTransportationEnum.TRAIN]: <Train />,
  [IconsTransportationEnum.TRUCK]: <Truck />,

  // Icons Status
  [IconsStatusEnum.ALERTCLOSE]: <AlertClose />,
  [IconsStatusEnum.ALERTEMPTY]: <AlertEmpty />,
  [IconsStatusEnum.ALERTINFO]: <AlertInfo />,
  [IconsStatusEnum.ALERTQUESTION]: <AlertQuestion />,
  [IconsStatusEnum.ALERTSUCCESS]: <AlertSuccess />,
  [IconsStatusEnum.DISABLED]: <Disabled />,
  [IconsStatusEnum.FLAGPIE]: <FlagPie />,
  [IconsStatusEnum.HAPPY]: <Happy />,
  [IconsStatusEnum.HELP]: <Help />,
  [IconsStatusEnum.SAD]: <Sad />,
  [IconsStatusEnum.SAVEFAVORITE]: <SaveFavorite />,

  // Icons Media
  [IconsMediaEnum.BOX]: <Box />,
  [IconsMediaEnum.CAMERA]: <Camera />,
  [IconsMediaEnum.CARDCOLLECTION]: <CardCollection />,
  [IconsMediaEnum.FILE]: <File />,
  [IconsMediaEnum.FILESTRUCTURE]: <FileStructure />,
  [IconsMediaEnum.FOLDER]: <Folder />,
  [IconsMediaEnum.IMAGE]: <Image />,
  [IconsMediaEnum.MAIL]: <Mail />,
  [IconsMediaEnum.MUSICNOTE]: <MusicNote />,
  [IconsMediaEnum.PLAYLIST]: <Playlist />,
  [IconsMediaEnum.PODCAST]: <PodCast />,
  [IconsMediaEnum.READBOOK]: <ReadBook />,
  [IconsMediaEnum.SCROLL]: <Scroll />,
  [IconsMediaEnum.SOUNDMUTED]: <SoundMuted />,
  [IconsMediaEnum.SOUNDPLAYING]: <SoundPlaying />,
  [IconsMediaEnum.STACK]: <Stack />,
  [IconsMediaEnum.VIDEO]: <Video />,
  [IconsMediaEnum.VIDEOCAM]: <VideoCam />,

  // Icons Technology
  [IconsTechnologyEnum.AUTOLAYOUT]: <AutoLayout />,
  [IconsTechnologyEnum.CAST]: <Cast />,
  [IconsTechnologyEnum.CHIP]: <Chip />,
  [IconsTechnologyEnum.COLORPALETTE]: <ColorPalette />,
  [IconsTechnologyEnum.CUBE]: <Cube />,
  [IconsTechnologyEnum.CURSOR]: <Cursor />,
  [IconsTechnologyEnum.DATABASE]: <Database />,
  [IconsTechnologyEnum.DESKTOP]: <Desktop />,
  [IconsTechnologyEnum.DIAMOND]: <Diamond />,
  [IconsTechnologyEnum.FINGERPRINT]: <Fingerprint />,
  [IconsTechnologyEnum.INBOX]: <Inbox />,
  [IconsTechnologyEnum.KEY]: <Key />,
  [IconsTechnologyEnum.LABBEAKER]: <LabBeaker />,
  [IconsTechnologyEnum.LAPTOP]: <Laptop />,
  [IconsTechnologyEnum.LAYOUT]: <Layout />,
  [IconsTechnologyEnum.MASTERCOMPONENT]: <MasterComponent />,
  [IconsTechnologyEnum.MOUSE]: <Mouse />,
  [IconsTechnologyEnum.PHONE]: <Phone />,
  [IconsTechnologyEnum.PRINTER]: <Printer />,
  [IconsTechnologyEnum.QRCODE]: <QRCode />,
  [IconsTechnologyEnum.SERVER]: <Server />,
  [IconsTechnologyEnum.SHIELDCHECK]: <ShieldCheck />,
  [IconsTechnologyEnum.SHIELD]: <Shield />,
  [IconsTechnologyEnum.SHREADED]: <Shreaded />,
  [IconsTechnologyEnum.TABLET]: <Tablet />,
  [IconsTechnologyEnum.TYPE]: <Type />,
  [IconsTechnologyEnum.USB]: <USB />,
  [IconsTechnologyEnum.VERIFIEDBADGE]: <VerifiedBadge />,
  [IconsTechnologyEnum.WATCH]: <Watch />,
  [IconsTechnologyEnum.WIFI]: <Wifi />,

  // Icons Weather
  [IconsWeatherEnum.CLOUD]: <Cloud />,
  [IconsWeatherEnum.CLOUDLYNIGHT]: <CloudlyNight />,
  [IconsWeatherEnum.CLOUDSNOW]: <CloudSnow />,
  [IconsWeatherEnum.HEAT]: <Heat />,
  [IconsWeatherEnum.HURRICANE]: <Hurricane />,
  [IconsWeatherEnum.LIGHTNING]: <Lightning />,
  [IconsWeatherEnum.MOON]: <Moon />,
  [IconsWeatherEnum.PARTLYCLOUDY]: <PartlyCloudy />,
  [IconsWeatherEnum.RAIN]: <Rain />,
  [IconsWeatherEnum.SNOW]: <Snow />,
  [IconsWeatherEnum.STARS]: <Stars />,
  [IconsWeatherEnum.SUN]: <Sun />,
  [IconsWeatherEnum.TEMPERATURE]: <Temperature />,
  [IconsWeatherEnum.THUNDERSTORMS]: <Thunderstorms />,
  [IconsWeatherEnum.TORNADO]: <Tornado />,
  [IconsWeatherEnum.UMBRELLA]: <Umbrella />,
  [IconsWeatherEnum.WATERDROP]: <WaterDrop />,
  [IconsWeatherEnum.WIND]: <Wind />,

  // Icons Industry
  [IconsIndustryEnum.BRIEFCASE]: <Briefcase />,
  [IconsIndustryEnum.CARD]: <Card />,
  [IconsIndustryEnum.CASHMONEY]: <CashMoney />,
  [IconsIndustryEnum.CHARTBAR]: <ChartBar />,
  [IconsIndustryEnum.CHARTPIE]: <ChartPie />,
  [IconsIndustryEnum.DIAMONDROCK]: <DiamondRock />,
  [IconsIndustryEnum.DOLLAR]: <Dollar />,
  [IconsIndustryEnum.GIFT]: <Gift />,
  [IconsIndustryEnum.LAWBALANCE]: <LawBalance />,
  [IconsIndustryEnum.MEDICAL]: <Medical />,
  [IconsIndustryEnum.TARGET]: <Target />
}

export const Icon: React.FC<IconProps> = ({
  component,
  ...args
}) => {
  return (
    <div {...args}>
      {icons[component]}
    </div>
  )
}
