function findMatching(drivers, name) {
    const lowerCaseName = name.toLowerCase();
    const matchingDrivers = drivers.filter(driver => {
        return driver.toLowerCase() === lowerCaseName
    })
        return matchingDrivers
    }

    function fuzzyMatch(drivers, name) {
        const lowerCaseName = name.toLowerCase();
        const matchingDrivers = drivers.filter(driver => {
            return driver.toLowerCase().startsWith(lowerCaseName)
        })
            return matchingDrivers
    }

    function matchName(drivers, name) {
        const lowerCaseName = name.toLowerCase();
        const matchingDrivers = drivers.filter(driver => {
            return driver.name.toLowerCase() === lowerCaseName
        });
            return matchingDrivers
    }