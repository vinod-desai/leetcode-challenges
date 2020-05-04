/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransNoteLen = ransomNote.length;
    let text = 0;
    for(let i=0; i < ransNoteLen; i++){
        let idx = magazine.indexOf(ransomNote[i]);
        if(idx > -1){
            text += 1;
          magazine = magazine.replace(ransomNote[i], '');
        }
    }
    if(ransNoteLen == text){
        return true;
    }
    return false;
};