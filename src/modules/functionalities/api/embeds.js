const { EmbedBuilder } = require('discord.js')
const BANNERS = require('../../../variables/images')
const COLORS = require('../../../variables/colors')


const welcomeBanner = new EmbedBuilder()
                          .setColor(COLORS.accent)
                          .setImage(BANNERS.welcome)

const welcomeText = new EmbedBuilder()
                        .setColor(COLORS.accent)
                        .setTitle('Maligayang pagdating Kureijii’s !!!')
                        .setDescription('◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦')
                        .addFields(
                            {
                                name: 'ようこそ ! Sabi na at makakapasok ka. \nദ്ദി ˉ͈̀꒳ˉ͈́ )✧ eeeeeeyyy….',
                                value: '\n' + 
                                        'It is an honor to have you invited to our Mental Facility and just like any other facilities (we are not sure really) an admission process must be completed before you can occupy a room inside. For now, please go ahead with reading through our… very demure, very mindful and very cutesy guidelines below. Teehee✧' +
                                        '\n' +  
                                        'Oof… before we hop in to the server rules, it is best that you are first aware of the discord rules.' +
                                        '\n ' 
                            },
                        )

const discordPolicyText = new EmbedBuilder()
                              .setColor(COLORS.accent)
                              .setTitle('OFFICIAL DISCORD POLICIES')
                              .setDescription('◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦')
                              .addFields(
                                {
                                    name: '\n ' ,
                                    value: '\n \n' + 
                                        '◦◦✦ Discord Community Guidelines: https://discord.com/guidelines' +
                                        '\n' +  
                                        '◦◦✦ Discord Terms of Service: https://discord.com/terms'+
                                        '\n \n' +  
                                        'If you experience any harassment that goes against Discord\'s Community Guidelines, please be sure to report it directly to Discord. You can learn more about how to do that here: https://discord.com/safety/360044103651-reporting-abusive-behavior-to-discord' +
                                        '\n \n' +  
                                        'Now that you’ve read the Discord Policies, let’s go right in to our Server Rules.'
                                }
                              )

const rulesBanner = new EmbedBuilder()
                        .setColor(COLORS.accent)
                        .setImage(BANNERS.serverrules)

const rulesIntro = new EmbedBuilder()
                      .setColor(COLORS.accent)
                      .setTitle('“Be kureiji, but don\'t let it get out of control.”')
                      .addFields(
                          {
                          name: '\n' ,
                          value: 'We do expect everyone here to be chaotic as they are (or should?) however, we wanted to set a bit of clear boundaries while you enjoy your stay in the facility.. ' +
                              '\n \n' +  
                              'Nope! We aren’t restricting anyone with anything. This is only for us to establish a sense of order by defining what is acceptable and unacceptable behavior.' +
                              '\n \n' +  
                              'Note: The rules are regularly reviewed and revised if needed. ' +
                              '\n \n' +  
                              'Maraming salamat po! (๑•̀ᗝ•́)૭'
                          },
                      )
const rulesText = new EmbedBuilder()
                      .setColor(COLORS.accent)
                      .setTitle('THE RULES')
                      .addFields(
                          {
                            name: '◎◎ Rule 1: BE RESPECTFUL [ Very Demure ]' ,
                            value: '✦ Please treat everybody with kindness and understanding during our stay in this facility and while we are communicating with other Kureijii’s.. ' +
                                   '\n\n\n'
                          },
                          {
                            name: 'A. MEMBER INTERACTION' ,
                            value: 'Flaming, harassment, bullying, discrimination, hate speech and abuse will NOT be tolerated. This includes but isn’t limited to: threatening, obscene, defamatory, condescending, libelous, racial, religious, political, sexually objectionable, doctored, or bigotry content.'
                                    +'\n\n'
                            },
                            
                            {
                                name: 'B. FOUL LANGUAGES' ,
                                value: 'Let’s minimize the extreme or harsh use of such languages. We don’t really mind you swearing in any form but please avoid being offensive or insulting towards any member within the server. '
                            +'\n\n'
                            },
                            {
                                name: 'C. DOXING' ,
                                value: 'Don’t share personal information of other members without their consent.'
                            +'\n\n'
                            },
                            {
                                name: 'D. SLANDER' ,
                                value: 'Refrain from displaying any form of hostility or trying to incite drama. If you have issues with any of the member, kindly deal with it privately or elsewhere.' 
                            +'\n\n'
                            
                            },

                            {
                                name: '★. VOLUNTARY EXIT' ,
                                value: 'If it happens that you must have to leave the facility and become sane for whatever reason, please make it certain that you have informed any of the Admins before or after leaving. We won’t take it against you if you wish to take a step back and choose to focus your time to something else. ' +
                                    '\n\n' +
                                    'We also wished that whatever issues or private conversations made or said in the group should remain only in the group. ', 
                            },
                        {
                            name: '◎◎ Rule 2: KEEP YOUR CONTENT APPROPRIATE. [ Very Mindful ]' ,
                            value: '✦ We wanted to maintain a safe space for everyone in the server so let’s always be mindful of others.' +
                                    '\n\n\n'
                            },
                            {
                                name: 'A. INNAPPROPRIATE MEDIA' ,
                                value: 'Distribution of pornographic, offensive or uncomfortable, extremely disturbing or NSFL/NSFW (not safe for work) content will NOT be tolerated. Do not share the following examples: hentai, gore, shock media, etc. in any form of content without the Admins evaluation. Additionaly, Sharing of content, from text to media, that suggests normalization or justification of sexualizing minors is strongly prohibited. '
                                    +'\n\n'
                            },
                            {
                                name: 'B. USER PROFILE' ,
                                value: 'Always make sure to keep Usernames, Profile Pictures, User Statuses and Other Customizable User Information appropriate. Admins will request from the members to change these or will personally change the name of the user in the server without prior notice.'
                                    +'\n\n'
                            },
                        {
                            name: '◎◎ Rule 3: STAY ON TOPIC! [ Very Cutesy ]' ,
                            value: '✦ Messages are to be sent in the appropriate channels. Messages may be deleted without notice if they are not in the right place. Always review each channel\'s description and pinned messages to understand its purpose, rules, and other information.' +
                                    '\n\n\n'
                            },
                            {
                                name: 'A. SPAMMING' ,
                                value: 'Do not flood discussions with consecutive separate messages of single letters, words, images, emoticons, or large blocks of text in one or multiple channels.'
                        +'\n\n'
                            },
                            {
                                name: 'B. ROLE TAGGING' ,
                                value: 'Don’t mention roles unnecessarily, especially the Devs and Admins unless support within the server is needed.'
                                + '\n\n'
                            },
                            {
                                name: 'C. INVASIVE ADVERTISING' ,
                                value: 'Do not promote any group, idea, organising an event with intention of using the server as platform, or organisation within the server without express permission of the Admins (this includes other discord servers\' link).'
                            +'\n\n'
                            },
                            {
                                name: ' ' ,
                                value: '\n\n\n' +
                                    'Even if a specific rule is not explicitly stated nor is this list considered exhaustive, ADMINS and FamKureijii reserve final interpretation. Decisions will be based on the general principles that ultimately promote healthy communities as well as assumption that members act in good faith.'
                            },                    
                    )

const interviewText = new EmbedBuilder()
                            .setColor(COLORS.accent)
                            .setTitle('WELL DONE')
                            .addFields(
                                {
                                    name: 'Time for an Interview!' ,
                                    value: 'Since tapos mo na basahin ang lahat, pakipindot nalang yung Interview Button sa baba para makausap si Tito Bot!' 
                                    },        
                            )


const guidelineBanner = new EmbedBuilder()
                            .setColor(COLORS.accent)
                            .setImage('https://cdn.discordapp.com/attachments/1287203018957262964/1295136132123590747/3.png?ex=670ede84&is=670d8d04&hm=93018f8217c84f3ba7e8e225cd0a867cbaa41b7f654bac0111f8801b5f9e9008&')
const guidelineText = new EmbedBuilder()
                            .setColor(COLORS.accent)
                            .setTitle(' ')
                            .setDescription('This is your guide to your harmonious stay in the facility. All you have to do is to remember the word… ' + '\n' + '# C. R. A. Z. Y.')
                            .addFields(
                                {
                                    name: '♬ ⸽ COLLABORATION',
                                    value: '\n ' + 
                                           '◦◦▷ As a member of a Smule group, we are expected ofcors to have song collaborations as part of our group activity. ' +
                                           '\n\n ' +  
                                           'COLLAB PARTICIPATION tho is not required in this fam. Yes! You’ve read that right. We wont require every single Kureijii to participate in our every collaboration projects. Why? Baket? We just don’t… anymore. ' +
                                           '\n\n\ ' +
                                           'But here’s the catch, you must make sure that when you said YES to a project you CAN/WILL/SHOULD join the project. We are expecting everyone to be committed to the projects as much as we are.' 

                                },
                                {
                                    name: '___Things to remember when joining collabs:___ ' ,
                                    value:  '\n\n\n ' +
                                            '• **P**unctuality. You must be committed to complete the project on a given time frame. Meaning you have to ensure that you give time to sing your parts before the deadline. Time frames will depend on the Project Organizer.' +
                                            '\n\n ' +
                                            '• **L**earn. Once the song collab script is ready, make sure that you check your lines/parts and please(super please) learn the song ahead of time so that you can be vocally ready to sing your lines. This will avoid unnecessary retakes after you’ve done recording.' +
                                            '\n\n ' +
                                            '• **A**wareness. Be ready to respond anytime you will be called out for reminders and updates. We wanted to know if our message have crossed your eyes. Please be open as well for retakes.' +
                                            '\n\n ' +
                                            '• **Y**OLO. You Only Live Once. What does this imply? No holding back. When we sing, lets go all out. SING to your hearts content. It may not be easy to some but the experience will surely be fun.'                                            
                                            + '\n\n\n ' 
                                },
                                {
                                    name: '♬ ⸽ RECREATION',
                                    value: '\n ' + 
                                           '◦◦▷ We aim to have fun and put together engaging activities that everyone can enjoy.' +
                                           '\n\n\n ' +  
                                           'So… what is there to expect in this Facility with the new version of FamKureijii? (Most of these are still under construction… )' +
                                           '\n\n ' +
                                           '✮ **A**nime Watch-alongs' +
                                           '\n\n ' +
                                           '✮ **M**usic Hang outs' +
                                           '\n\n ' +
                                           '✮ **U**nscheduled Gaming' +
                                           '\n\n ' +
                                           '✮ **S**mule Live Jam Schedules' +
                                           '\n\n ' +
                                           '✮ **E**vents for Free Nitro & Discord Shop Item Give Aways'
                                },
                                {
                                    name: '♬ ⸽ ANNUAL FESTIVITY',
                                    value: '\n ' + 
                                           '◦◦▷ More events and perks during our anniversary to celebrate the foundation of FamKureijii.' +
                                           '\n\n ' +  
                                           '-   Impress MII Duet Collab Battle in Smule is back ( ℅ Zair )' +
                                           '\n\n ' +
                                           '-   Poster Making Competition Anniv Theme ( ℅ Meow aka N3komancer )' +
                                           '\n\n ' +
                                           '   *And more…*'
                                },
                                {
                                    name: '♬ ⸽ ZEN MODE',
                                    value: '\n ' + 
                                           '◦◦▷ After all the chaos in this facility, we also want you to find time to chill and let your minds wander the nothingness. This server has a Talk Only Voice Channels ’s and may add more per request.'
                                },
                                {
                                    name: '♬ ⸽ YOUTUBE-ING',
                                    value: '\n ' + 
                                           '◦◦▷ Levelin up from Smule, we have the talented Kureijii’s who’ve become Youtaites now. The YouTube Feeds will update us with “What’s New” of every YouTube Content creators of the Fam.' +
                                           '\n\n\n ' +
                                           '✮ YouTube Feeds - A channel dedicated to update the facility with “What’s New” from the YT channels of every Kureijii members and to fully support their YT contents.' +
                                           '\n\n ' +
                                           '✮ YT Live Streaming - Gaming? Karaoke? Just…Talking? ' +
                                           '\n\n ' +
                                           '✮ Chorus Battles participation' +
                                           '\n\n\n ' +
                                           'If you wanna be part of this amazing pips there will be a separate audition for you to take. DM the Admins for more details.'
                                },
                                )
const strikeSystemBanner = new EmbedBuilder()
                            .setColor(COLORS.accent)
                            .setImage('https://cdn.discordapp.com/attachments/1287203018957262964/1295136146917163151/4.png?ex=670ede87&is=670d8d07&hm=edf8886768d28a3cdf50c26185755e13aff80c2ad5fc5b31425655eacad4ecd2&')
const strikeSystemText = new EmbedBuilder()
                            .setColor(COLORS.accent)
                            .setTitle(' ')
                            .setDescription('If you have read and understood the rules and guidelines above, please remember that It is mandatory to adhere to the rules.' +
                                            '\n\n' + 
                                            'FamKureijii and the Admins retain the authority to enforce any of these rules at any given time and reserve the right of final interpretation.' +
                                            '\n\n' + 
                                            'Warnings, mutes, or bans may be issued depending on the severity of violations.' 
                            )
                            .addFields(
                                {
                                    name: 'SERVER RULES STRIKE',
                                    value: '\n\n' + 
                                           'Anyone caught disobeying any of the Server Rules will face the Sanctions as follows:' +
                                           '\n\n\n' +  
                                           '• **Verbal Warning** - You will receive a direct message from any of the ADMINS to inform your violation and will be reminded.' +
                                           '\n\n' +  
                                           '• **First Warning** - You will be muted from sending a message to any channels for 1 week.' +
                                           '\n\n' +  
                                           '• **Final Warning** - You will be muted for 1 month with warning to dismissal..' +
                                           '\n\n' +  
                                           '• **Three (3) undisputable warnings will result to BAN.**' +
                                           '\n\n' +  
                                           '• ** Immediate Ban** - For violations that give rise to a significant threat to the community\'s safety or well-being.This may be issued without prior warnings.'
                                },
                                {
                                    name: 'INACTIVITY STRIKE',
                                    value: '\n' + 
                                           'This rule will only apply when a Kureijii commits to join an organized song collab and gone MIA without notice. Each incident will be counted as one (1) strike and will be accumulated until it maxed to 5th strike.' +
                                           '\n\n\n' +  
                                           '• 1st Strike - a reminder will be sent as DM by any of the ADMINS. ' +
                                           '\n\n' +  
                                           '• 2nd Strike- a reminder message will be sent as DM. If undisputable, a Kureijii will be banned from joining any collabs for the next 3 weeks. ' +
                                           '\n\n' +  
                                           '• 3rd Strike - a reminder message will be sent as DM. If undisputable, a Kureijii will be banned from joining any collabs for the next 2 months. ' +
                                           '\n\n' +  
                                           '• 4th Strike- a warning message will be sent as DM, reminding you that it should be the last strike. If undisputable, a Kureijii will be banned from joining any collabs for the next 5 months plus a war.' +
                                           '\n\n' +  
                                           '• 5th Strike - You will be asked to voluntarily exit the facility or will be kicked from the facility,'
                                },
                                {
                                    name: 'DISPUTABLE REASONS:',
                                    value: '\n' + 
                                           'If a Kureijii accepted to participate in a song collab but happened to not be able to join, one must make sure to:' +
                                           '\n\n\n' +  
                                           '1.   Notify the collab organizer about it as early as 5 to 3 days before the deadline. ' +
                                           '\n\n ' +
                                           '2.   Provide an acceptable reason.' +
                                           '\n\n ' +
                                           'For any inquiries, concerns regarding the guidelines, appeals, or to report rule violations and members at risk, please don’t hesitate to contact the ADMINS directly. Suggestions should be posted on 📝⸽ꜱᴜɢɢᴇꜱᴛɪᴏɴꜱ channel.' +
                                           '\n\n\n ' +
                                           '**Thank you for taking the time to read and adhere to the guidelines! Have fun around the facility!**'
                                },
                                )                            

module.exports = {
    welcomeBanner,
    welcomeText,
    discordPolicyText,
    rulesBanner,
    rulesIntro,
    rulesText,
    interviewText,
    guidelineBanner,
    guidelineText,
    strikeSystemBanner,
    strikeSystemText
}