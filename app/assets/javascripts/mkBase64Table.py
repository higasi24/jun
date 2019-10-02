#!/usr/bin/env python

import io
import json

def main():
    dict = {}
    n = 0

    # A~Z
    for i in range(ord('A'), ord('Z') + 1):
        char = unichr(i)
        bin = format(n, 'b').zfill(6)
        dict[str(bin)] = char
        print bin, char
        n += 1

    # a~z
    for i in range(ord('a'), ord('z') + 1):
        char = unichr(i)
        bin = format(n, 'b').zfill(6)
        dict[str(bin)] = char
        print bin, char
        n += 1

    # 0~9
    for i in range(0, 10):
        bin = format(n, 'b').zfill(6)
        dict[str(bin)] = str(i)
        print bin, i
        n+=1

    # +
    bin = format(n, 'b').zfill(6)
    dict[str(bin)] = '+'

    n+=1
    bin = format(n, 'b').zfill(6)
    dict[str(bin)] = '/'

    f = open('base64_table.json', "w")
    f.write(json.dumps(dict))
    f.close()

if __name__ == '__main__':
    main()