import random
import sys


def main():
    if len(sys.argv) != 3:
        print("Usage: py groepjes_maken.py <filename> <group_size>")
        sys.exit(1)

    filename = sys.argv[1]
    group_size = int(sys.argv[2])

    with open(filename, "r") as f:
        names = f.read().split(";")

    random.shuffle(names)

    for i in range(0, len(names), group_size):
        group_members = ", ".join(names[i:i+group_size])
        print(f"Groep {i//group_size + 1}: {group_members}")


if __name__ == "__main__":
    main()
