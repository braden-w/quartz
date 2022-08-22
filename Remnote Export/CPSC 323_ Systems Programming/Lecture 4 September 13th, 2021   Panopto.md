Data sizes
    characters→1 byte
    integers→2 to 4 bytes
    real numbers→4 to 8 bytes
    https://remnote-user-data.s3.amazonaws.com/vDr_Hpql3HpVE6At2pfvKAGYjdTnEEsUX13_nCkFW-uSSeoZzsb5ftb_I2X2sbI5xhJ3QLlLj0zFEntbriuoE6Hrp7OM55rE5fh8bJ-NIUdWFofnALrlIRLYELw-9xvx.png
Big Endian  vs. Little Endian
    Big Endian↔Store most significant byte first
    Little Endian↔Store least significant byte first
    Most computers are Little Endian
    A0BC0012 is equivalent to 1200BCA0, but can lead to transmission errors between PC's
Representing negative numbers in computers?
    Signed Magnitude↔Use the first char to denote positive or negative
        why it's bad→there are two ways to write zero as 0 (0000) or -0 (1000) 
    One's complement↔Just flip all the bits in memory
        examples
            0b01111↔0b10000
            0b10111↔0b01000
        difficulties→you still have two zeros
        how to add→Just add bits. IF it overflows, add 1 
        how to subtract→Just subtract bits. IF you need to borrow, subtract 1 
    Two's complement↔Just flip all the bits in memory, then add 1
        examples
            0b0001↔0b1111
        how to add→Add bits, remove overflow/carry on left side, then take two compliment of result.
        how to subtract→Just add using negative numbers
        there's only one way to represent 0
