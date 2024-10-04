const $video = document.querySelector('#videoP')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('Reproduciendo.....')
}

function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('Pausando.....')
}

function handleForward() {
    $video.currentTime += 10;
    console.log('atrasando 10 segundos...')
}

function handleBackward() {
    $video.currentTime -= 10;
    console.log('atrasando 10 segundos...')
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handledLoaded)
$video.addEventListener('timeupdate', handledTimeUpdate)

function handledLoaded() {
    $progress.max = $video.duration
    $video.duration
}

function handledTimeUpdate() {
    $progress.value = $video.currentTime
}

$progress.addEventListener('input', handledImput)

function handledImput() {
    console.log( 'valor impur', $progress.value)
    $video.currentTime = $progress.value
}