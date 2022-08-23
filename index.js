function regex(expression, toTest) {
        console.log(
                '\t',
                expression.toString(),
                '->',
                `"${toTest}"`,
                '=',
                expression.test(toTest),
                '\n'
        );
}

function regexMatch(expression, toTest) {
        const matches = toTest.match(expression);

        console.log(
                '\t',
                expression.toString(),
                '->',
                `"${toTest}"`,
                '=',
                [...matches],
                '\n'
        );
}

function ChararacterClasses() {
        console.log('[ChararacterClasses]');

        // uppercase
        regex(/[A-Z]/, 'A');             // true
        
        // lowercase
        regex(/[a-z]/, 'a');             // true
        
        // digits
        regex(/[0-9]/, '0');             // true
        
        // alphanumeric
        regex(/[a-zA-Z0-9]/, 'Z');       // true

        // anything (*)
        regex(/.*/, 'ekrfjwerkjgwkerjg'); // true
}

function Quantifers() {
        console.log('[Quantifers]');

        // zero or more (*)
        regex(/Cancell*ed/, 'Cancelled'); // true
        regex(/Cancell*ed/, 'Canceled');  // true

        // one or more (+)
        regex(/Cancel+ed/, 'Cancelled');           // true
        regex(/Cancel+ed/, 'Canceled');            // true
        regex(/Cancel+ed/, 'Cancelllllllllllled'); // true
        regex(/Cancel+ed/, 'Cancellaed');          // false

        // optional (?)
        regex(/Colou?r/, 'Color');   // true
        regex(/Colou?r/, 'Colour');  // true

        // only one
        regex(/a{1}/, 'a');    // true
        regex(/a{1}/, 'aa');   // false

        // at least X times and at most Y times
        regex(/b{2,3}/, 'bbreakfast');     // true
        regex(/b{2,3}/, 'bbbreakfast');    // true
        regex(/b{2,3}/, 'breakfast');      // false

        // at least one
        regex(/b{1,}/, 'breakfast');     // true
        regex(/b{1,}/, 'bbbreakfast');   // true
        regex(/b{1,}/, 'reakfast');      // false
}

function AnchorsBoundaries() {
        console.log('[AnchorsBoundaries]');
        
        regex(/^Everett$/, 'Everett');         // true
        regex(/^Everett$/, 'Everett Morgan');  // false

        regex(/^Everett/, 'Everett Morgan');   // true
        regex(/^Everett/, 'Morgan Everett');   // false

        regex(/Everett$/, 'Morgan Everett');   // true
        regex(/Everett$/, 'Everett Morgan');   // false
}

function CaptureGroups() {
        console.log('[CaptureGroups]');
        
        // test with capture groups
        regex(/^(Everett) (Morgan)$/, 'Everett Morgan'); // true

        // backreference
        regex(/^(Everett) \1$/, 'Everett Everett');      // true

        // match with capture groups
        regexMatch(/^(Everett) (Morgan)$/, 'Everett Morgan');
}

function Lookarounds() {
        console.log('[Lookarounds]');

        // postitve lookahead
        regex(/^Everett (?=Morgan)/, 'Everett Morgan');  // true
        regex(/^Everett (?=Morgan)/, 'Everett ');        // false

        // postitve behind
        regex(/(?<=Everett) Morgan/, 'Everett Morgan');  // true
        regex(/(?<=Everett) Morgan/, ' Morgan');         // false

        // negative lookahead
        regex(/Everett (?!Morgan)/, 'Everett John');    // true
        regex(/Everett (?!Morgan)/, 'Everett Morgan');  // false

        // negative lookbehind
        regex(/(?<!Everett) Morgan/, 'John Morgan');     // true
        regex(/(?<!Everett) Morgan/, 'Everett Morgan');  // false

        // positive lookbehind match
        regexMatch(/(?<=Everett) (Morgan)/, 'Everett Morgan');
}

ChararacterClasses();
Quantifers();
AnchorsBoundaries();
CaptureGroups();
Lookarounds();