// Need to finish this - it'll be a pretty crappy cheaty "service discovery" thing that will help with local routing 
// it's going to be a config file and an if statement - it really doesn't need to be intelligent for now

const getBaseUrl = (targetService, sourceService) => {
    if (targetService === sourceService) {
        return null
    }
    return './'
}