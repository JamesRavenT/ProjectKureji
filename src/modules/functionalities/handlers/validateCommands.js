module.exports = (existingCommand, command) => {
    const checkChoices = (existingChoices, choices) => {
        for(const choice of choices) {
            const existingChoice = existingChoices.find((selection) => selection.name = choice.name)
            if (!existingChoice) { return true }
            if (choice.value !== existingChoice.value) {return true}
        }
        return false
    }

    const checkOptions = (existingOptions, options) => {
        for(const option of options) {
            const existingOption = existingOptions.find((selection) => selection.name = option.name)
            if (!existingOption) { return true }
            if (option, description !== existingOption.description 
                || option.type !== existingOption.type
                || (option.required || false) !== existingOption.required
                || (option.choices?.length || 0) !== (existingOption.choices?.length || 0) 
                || checkChoices(option.choices || [], existingOption.choices || [])) 
            {
                return true
            }
        }
        return false
    }

    if(existingCommand.description !== command.description 
        || existingCommand.options?.length !== (command.options?.length || 0) 
        || checkOptions(existingCommand.options, command.options || 0))
        {
            return true;
        }

        return false;
}